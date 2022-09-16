import { BigInt } from "@graphprotocol/graph-ts"
import { BunniHub, Compound, Deposit, NewBunni, OwnershipTransferred, PayProtocolFee, SetProtocolFee, Withdraw } from "../generated/BunniHub/BunniHub"
import { BunniToken } from "../generated/schema"

export function handleCompound(event: Compound): void {}

export function handleDeposit(event: Deposit): void {}

export function handleNewBunni(event: NewBunni): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePayProtocolFee(event: PayProtocolFee): void {}

export function handleSetProtocolFee(event: SetProtocolFee): void {}

export function handleWithdraw(event: Withdraw): void {}
