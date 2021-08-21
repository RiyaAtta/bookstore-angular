export class Customer {
    custId: number;
    email: string;
    password: string;
    fullName: string;
    address: String;
    mobileNumber: string;
    registerOn: string;

    constructor(
        custId: number,
        email: string,
        password: string,
        fullName: string,
        address: String,
        mobileNumber: string,
        registerOn: string
    ) {
        this.custId = custId;
        this.email = email;
        this.password = password;
        this.fullName = fullName;
        this.address = address;
        this.mobileNumber = mobileNumber;
        this.registerOn = registerOn;

    }
    getemail(): String {
        return this.email;
    }
    getpassword(): String {
        return this.password;
    }
    getefullName(): String {
        return this.fullName;
    }
    getaddress(): String {
        return this.address;
    }
    getmobileNumber(): String {
        return this.mobileNumber;
    }
    getregisterOn(): String {
        return this.registerOn;
    }

}

