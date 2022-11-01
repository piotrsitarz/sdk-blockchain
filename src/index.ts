import { Base } from "./base";
import { Balances } from "./balances";
import { applyMixins } from "./utils";

class BlockChainExplorerSDK extends Base {}
interface BlockChainExplorerSDK extends Balances {}

applyMixins(BlockChainExplorerSDK, [Balances]);

export default BlockChainExplorerSDK;
