const { AgentConfig } = require('superagi_client');

const agentConfig = new AgentConfig({
  name: "Example Agent",
  description: "A detailed description outlining the purpose of the agent.",
  goal: ["List specific tasks for the agent"],
  instruction: ["List any guiding instructions for the agent"],
  agentWorkflow: "Goal Based Workflow",
  constraints: [],
  tools: [{ name: "Toolkit Name" }],
  iterationInterval: 500,
  maxIterations: 10,
  model: "gpt-4"
});

const agent = await client.createAgent(agentConfig);
