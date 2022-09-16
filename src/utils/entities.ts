import { Address, BigInt } from "@graphprotocol/graph-ts";
import { BunniToken } from "../../generated/schema";
import { ZERO_INT, ZERO_ADDR} from "./constants";

export function getBunniToken(address: Address): BunniToken {
  let bunniToken = BunniToken.load(address.toHex());

  if (bunniToken === null) {
    bunniToken = new BunniToken(address.toHex());

    bunniToken.pool = ZERO_ADDR;
    bunniToken.address = address;
    bunniToken.tickLower = ZERO_INT;
    bunniToken.tickUpper = ZERO_INT;

    bunniToken.save();
  }

  return bunniToken as BunniToken;
}
