const readline = require("readline");

class Campaign {
  constructor(name, goal) {
    this.name = name;
    this.goal = goal;
    this.raised = 0;
    this.contributors = [];
  }

  contribute(contributor, amount) {
    if (amount <= 0) {
      console.log("Contribution amount must be greater than zero.");
      return;
    }
    this.raised += amount;
    this.contributors.push({ contributor, amount });
    console.log(
      `${contributor} contributed ${amount}. Total raised: ${this.raised}`
    );
    console.log("Payment successful!");
  }

  getStatus() {
    return this.raised >= this.goal
      ? "Goal reached!"
      : `Raised ${this.raised} of ${this.goal}`;
  }
}

class CrowdFundingApp {
  constructor() {
    this.campaigns = [];
  }

  createCampaign(name, goal) {
    const campaign = new Campaign(name, goal);
    this.campaigns.push(campaign);
    console.log(`Campaign ${name} created with goal ${goal}`);
  }

  contributeToCampaign(name, contributor, amount) {
    const campaign = this.campaigns.find((c) => c.name === name);
    if (!campaign) {
      console.log(`Campaign ${name} not found.`);
      return;
    }
    campaign.contribute(contributor, amount);
  }

  getCampaignStatus(name) {
    const campaign = this.campaigns.find((c) => c.name === name);
    if (!campaign) {
      console.log(`Campaign ${name} not found.`);
      return;
    }
    console.log(campaign.getStatus());
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const app = new CrowdFundingApp();

rl.question("Enter campaign name: ", (name) => {
  rl.question("Enter campaign goal: ", (goal) => {
    app.createCampaign(name, parseFloat(goal));
    rl.question("Enter your name: ", (contributor) => {
      rl.question("Enter contribution amount: ", (amount) => {
        app.contributeToCampaign(name, contributor, parseFloat(amount));
        app.getCampaignStatus(name);
        rl.close();
      });
    });
  });
});
