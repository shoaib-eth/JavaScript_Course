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

// Example usage
const app = new CrowdFundingApp();
app.createCampaign("Save the Rainforest", 1000);
app.contributeToCampaign("Save the Rainforest", "Alice", 200);
app.contributeToCampaign("Save the Rainforest", "Bob", 300);
app.getCampaignStatus("Save the Rainforest");
