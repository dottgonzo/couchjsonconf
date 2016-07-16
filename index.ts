interface IClassConf {
    hostname: string;
    protocol?: string;
    port?: number;
    db?: string;
    user?: string;
    password?: string;
}

export default class couchJsonConf implements IClassConf {
    publink: string;
    protocol: string;
    port: number;
    host: string;
    hostname: string;
    auth: string;
    db: string;
    pubdb: string;
    mylink: string;
    mydb: string;
    user: string;
    password: string;

    constructor(public json: IClassConf) {

        if (json.protocol && json.port) {
            this.protocol = json.protocol;
            this.port = json.port;
        } else if (!json.protocol && !json.port) {
            this.protocol = "http";
            this.port = 80;
        } else if (!json.protocol && json.port && json.port === 80) {
            this.protocol = "http";
            this.port = json.port;
        } else if (json.protocol && json.protocol === "http" && !json.port) {
            this.port = 80;
            this.protocol = json.protocol;
        } else if (!json.protocol && json.port && json.port === 443) {
            this.protocol = "https";
            this.port = json.port;
        } else if (json.protocol && json.protocol === "https" && !json.port) {
            this.port = 443;
            this.protocol = json.protocol;
        } else if (json.protocol) {
            throw Error("invalid protocol");
        } else if (json.port) {
            throw Error("invalid port");
        }

        if (json.hostname) {
            this.hostname = json.hostname;
        } else {
            throw Error("no hostname specified");
        }

        if (this.protocol === "https" && this.port === 443) {
            this.host = this.hostname;
            this.publink = this.protocol + "://" + this.hostname;
        } else if (this.protocol === "http" && this.port === 80) {
            this.host = this.hostname;
            this.publink = this.protocol + "://" + this.hostname;
        } else {
            this.host = this.hostname + ":" + this.port;
            this.publink = this.protocol + "://" + this.hostname + ":" + this.port;
        }

        if (json.user && json.password) {
            this.user = json.user;
            this.password = json.password;
            this.auth = this.user + ":" + this.password;
            if (this.protocol === "https" && this.port === 443) {
                this.mylink = this.protocol + "://" + this.auth + "@" + this.hostname;
            } else if (this.protocol === "http" && this.port === 80) {
                this.mylink = this.protocol + "://" + this.auth + "@" + this.hostname;
            } else {
                this.mylink = this.protocol + "://" + this.auth + "@" + this.hostname + ":" + this.port;
            }
            if (json.db) {
                this.mydb = this.mylink + "/" + json.db;
            }
        }


        if (json.db) {
            this.db = json.db;
            this.pubdb = this.publink + "/" + this.db;
        }
    }

    my(db: string): string {

        if (this.mylink) {
            return this.mylink + "/" + db;
        } else {
            throw Error("require authorized user");
        }

    };

    for(user: string, password: string, db?: string): string {

        if (db) {
            return this.protocol + "://" + user + ":" + password + "@" + this.host + "/" + db;
        } else {
            return this.protocol + "://" + user + ":" + password + "@" + this.host;
        }

    };

};