import { ethers } from "hardhat";

async function main() {
  const token = await ethers.getContractFactory("Lottery");
  const Lottery = await token.deploy();

  await Lottery.deployed();

  console.log(`Lottery address:`, Lottery.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
