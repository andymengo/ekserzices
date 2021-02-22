
function BankAccount(name, balance) {
    this.name = name;
    this.balance = balance;
    this.withdraw = withdraw; 
    this.deposit = deposit; 
    this.log = [];
    this.printlog = printlog;
}

function withdraw(howmuch) {
    let oldbalance = this.balance;
    let success = 0;

    if (howmuch > this.balance) {
        console.log("This dude doesnt have suffiecient funds my dude");
    } else {
        this.balance -= howmuch;
        success += 1;
    }

    this.log.push({
        transaction: "withdraw",
        amount: howmuch,
        date: new Date(),
        oldbalance: oldbalance,
        newbalance: this.balance,
        success: success
    })
}

function deposit(howmuch) {
    oldbalance = this.balance;
    this.balance += howmuch;

    this.log.push({
        transaction: "deposit",
        amount: howmuch,
        date: new Date(),
        oldbalance: oldbalance,
        newbalance: this.balance,
        success: 1
    })
}

function printlog() {
    document.write("<table><thead><tr><th>")
    document.write("Date</th>")
    document.write("<th>Transaction</th>")
    document.write("<th>Amount</th>")
    document.write("<th>Success</th>")
    document.write("<th>Old balance</th>")
    document.write("<th>New balance</th></tr></thead>")


    for (let index = 0; index < this.log.length; index++) {
        document.write("<tr>")
        document.write("<td>" + this.log[index].date + "\t"
        + "<td>" + this.log[index].transaction + "\t"
        + "<td>" + this.log[index].amount + "\t"
        + "<td>" + this.log[index].success + "\t"
        + "<td>" + this.log[index].oldbalance + "\t"
        + "<td>" + this.log[index].newbalance)
    }
}