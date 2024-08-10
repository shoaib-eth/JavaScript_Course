const name = prompt("Enter funder name:");

const crowdfunding = {
    funders: [],
    addFunder(name, amount) {
        this.funders.push({ name, amount });
    },
    withdrawFunds() {
        const totalAmount = this.funders.reduce((total, funder) => total + funder.amount, 0);
        this.funders.length = 0; // Empty the funders array
        return totalAmount;
    }
};