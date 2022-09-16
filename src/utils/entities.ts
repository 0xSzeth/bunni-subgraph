import { Address, BigInt } from "@graphprotocol/graph-ts";
import { BunniToken } from "../../generated/schema";
import { ZERO_INT, ZERO_ADDR} from "./constants";

getBunniToken(address: Address): BunniToken {
  let bunniToken = BunniToken.load(address);

  if (bunniToken === null) {
    bunniToken = new BunniToken(address.toHex());

    bunniToken.pool = ZERO_ADDR.toHex();
    bunniToken.address = address.toHex();
    bunniToken.tickLower = ZERO_INT;
    bunniToken.tickUpper = ZERO_INT;

    bunniToken.save();
  }

  return bunniToken as BunniToken;
}
