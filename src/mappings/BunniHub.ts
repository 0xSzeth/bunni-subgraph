import { Address, BigInt } from "@graphprotocol/graph-ts";
import { BunniHub, Compound, Deposit, NewBunni, OwnershipTransferred, PayProtocolFee, SetProtocolFee, Withdraw } from "../../generated/BunniHub/BunniHub";
import { BunniToken } from "../../generated/schema";
import { getBunniToken } from "../utils/entities";

export function handleCompound(event: Compound): void {}

export function handleDeposit(event: Deposit): void {}

export function handleNewBunni(event: NewBunni): void {
  let bunniToken = getBunniToken(event.params.token);
  bunniToken.pool = event.params.pool;
  bunniToken.tickLower = BigInt.fromI32(event.params.tickLower);
  bunniToken.tickUpper = BigInt.fromI32(event.params.tickUpper);
  bunniToken.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePayProtocolFee(event: PayProtocolFee): void {}

export function handleSetProtocolFee(event: SetProtocolFee): void {}

export function handleWithdraw(event: Withdraw): void {}
