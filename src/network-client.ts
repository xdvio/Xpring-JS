import { GetAccountInfoResponse } from './generated/web/rpc/v1/account_info_pb'
import { GetFeeResponse } from './generated/web/rpc/v1/fee_pb'
import { GetTxResponse } from './generated/web/rpc/v1/tx_pb'
import {
  SubmitTransactionRequest,
  SubmitTransactionResponse,
} from './generated/web/rpc/v1/submit_pb'

/**
 * The network client interface provides a wrapper around network calls to the Xpring Platform.
 */
export interface NetworkClient {
  getAccountInfo(address: string): Promise<GetAccountInfoResponse>
  getFee(): Promise<GetFeeResponse>
  getTx(hash: string): Promise<GetTxResponse>
  submitTransaction(
    request: SubmitTransactionRequest,
  ): Promise<SubmitTransactionResponse>
  // TODO(keefertaylor): Add last ledger validated sequence.
}
