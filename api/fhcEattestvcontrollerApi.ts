/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { XHR } from "./XHR"
import * as models from "../model/models"

export class fhcEattestvcontrollerApi {
  host: string
  headers: Array<XHR.Header>
  constructor(host: string, headers: any) {
    this.host = host
    this.headers = Object.keys(headers).map(k => new XHR.Header(k, headers[k]))
  }

  setHeaders(h: Array<XHR.Header>) {
    this.headers = h
  }

  handleError(e: XHR.Data) {
    if (e.status == 401) throw Error("auth-failed")
    else throw Error("api-error" + e.status)
  }

  cancelAttestWithResponseUsingDELETE(
    patientSsin: string,
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpFirstName: string,
    hcpLastName: string,
    hcpCbe: string,
    patientFirstName: string,
    patientLastName: string,
    patientGender: string,
    eAttestRef: string,
    reason: string,
    date?: number,
    traineeSupervisorSsin?: string,
    traineeSupervisorNihii?: string,
    traineeSupervisorFirstName?: string,
    traineeSupervisorLastName?: string
  ): Promise<models.SendAttestResultWithResponse | any> {
    let _body = null

    const _url =
      this.host +
      "/eattestv2/send/{patientSsin}/verbose".replace("{patientSsin}", patientSsin + "") +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (hcpCbe ? "&hcpCbe=" + hcpCbe : "") +
      (patientFirstName ? "&patientFirstName=" + patientFirstName : "") +
      (patientLastName ? "&patientLastName=" + patientLastName : "") +
      (patientGender ? "&patientGender=" + patientGender : "") +
      (date ? "&date=" + date : "") +
      (traineeSupervisorSsin ? "&traineeSupervisorSsin=" + traineeSupervisorSsin : "") +
      (traineeSupervisorNihii ? "&traineeSupervisorNihii=" + traineeSupervisorNihii : "") +
      (traineeSupervisorFirstName
        ? "&traineeSupervisorFirstName=" + traineeSupervisorFirstName
        : "") +
      (traineeSupervisorLastName ? "&traineeSupervisorLastName=" + traineeSupervisorLastName : "") +
      (eAttestRef ? "&eAttestRef=" + eAttestRef : "") +
      (reason ? "&reason=" + reason : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("DELETE", _url, headers, _body)
      .then(doc => new models.SendAttestResultWithResponse(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  cancelAttestUsingDELETE(
    patientSsin: string,
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpFirstName: string,
    hcpLastName: string,
    hcpCbe: string,
    patientFirstName: string,
    patientLastName: string,
    patientGender: string,
    eAttestRef: string,
    reason: string,
    date?: number,
    traineeSupervisorSsin?: string,
    traineeSupervisorNihii?: string,
    traineeSupervisorFirstName?: string,
    traineeSupervisorLastName?: string
  ): Promise<models.SendAttestResult | any> {
    let _body = null

    const _url =
      this.host +
      "/eattestv2/send/{patientSsin}".replace("{patientSsin}", patientSsin + "") +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (hcpCbe ? "&hcpCbe=" + hcpCbe : "") +
      (patientFirstName ? "&patientFirstName=" + patientFirstName : "") +
      (patientLastName ? "&patientLastName=" + patientLastName : "") +
      (patientGender ? "&patientGender=" + patientGender : "") +
      (date ? "&date=" + date : "") +
      (traineeSupervisorSsin ? "&traineeSupervisorSsin=" + traineeSupervisorSsin : "") +
      (traineeSupervisorNihii ? "&traineeSupervisorNihii=" + traineeSupervisorNihii : "") +
      (traineeSupervisorFirstName
        ? "&traineeSupervisorFirstName=" + traineeSupervisorFirstName
        : "") +
      (traineeSupervisorLastName ? "&traineeSupervisorLastName=" + traineeSupervisorLastName : "") +
      (eAttestRef ? "&eAttestRef=" + eAttestRef : "") +
      (reason ? "&reason=" + reason : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("DELETE", _url, headers, _body)
      .then(doc => new models.SendAttestResult(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  sendAttestUsingPOST1(
    patientSsin: string,
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpFirstName: string,
    hcpLastName: string,
    hcpCbe: string,
    patientFirstName: string,
    patientLastName: string,
    patientGender: string,
    attest: models.Eattest,
    treatmentReason?: string,
    date?: number,
    traineeSupervisorSsin?: string,
    traineeSupervisorNihii?: string,
    traineeSupervisorFirstName?: string,
    traineeSupervisorLastName?: string,
    guardPostNihii?: string,
    guardPostSsin?: string,
    guardPostName?: string
  ): Promise<models.SendAttestResult | any> {
    let _body = null
    _body = attest

    const _url =
      this.host +
      "/eattestv2/send/{patientSsin}".replace("{patientSsin}", patientSsin + "") +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (hcpCbe ? "&hcpCbe=" + hcpCbe : "") +
      (patientFirstName ? "&patientFirstName=" + patientFirstName : "") +
      (patientLastName ? "&patientLastName=" + patientLastName : "") +
      (patientGender ? "&patientGender=" + patientGender : "") +
      (treatmentReason ? "&treatmentReason=" + treatmentReason : "") +
      (date ? "&date=" + date : "") +
      (traineeSupervisorSsin ? "&traineeSupervisorSsin=" + traineeSupervisorSsin : "") +
      (traineeSupervisorNihii ? "&traineeSupervisorNihii=" + traineeSupervisorNihii : "") +
      (traineeSupervisorFirstName
        ? "&traineeSupervisorFirstName=" + traineeSupervisorFirstName
        : "") +
      (traineeSupervisorLastName ? "&traineeSupervisorLastName=" + traineeSupervisorLastName : "") +
      (guardPostNihii ? "&guardPostNihii=" + guardPostNihii : "") +
      (guardPostSsin ? "&guardPostSsin=" + guardPostSsin : "") +
      (guardPostName ? "&guardPostName=" + guardPostName : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("POST", _url, headers, _body)
      .then(doc => new models.SendAttestResult(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  sendAttestWithResponseUsingPOST1(
    patientSsin: string,
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpFirstName: string,
    hcpLastName: string,
    hcpCbe: string,
    patientFirstName: string,
    patientLastName: string,
    patientGender: string,
    attest: models.Eattest,
    treatmentReason?: string,
    date?: number,
    traineeSupervisorSsin?: string,
    traineeSupervisorNihii?: string,
    traineeSupervisorFirstName?: string,
    traineeSupervisorLastName?: string,
    guardPostNihii?: string,
    guardPostSsin?: string,
    guardPostName?: string
  ): Promise<models.SendAttestResultWithResponse | any> {
    let _body = null
    _body = attest

    const _url =
      this.host +
      "/eattestv2/send/{patientSsin}/verbose".replace("{patientSsin}", patientSsin + "") +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (hcpCbe ? "&hcpCbe=" + hcpCbe : "") +
      (patientFirstName ? "&patientFirstName=" + patientFirstName : "") +
      (patientLastName ? "&patientLastName=" + patientLastName : "") +
      (patientGender ? "&patientGender=" + patientGender : "") +
      (treatmentReason ? "&treatmentReason=" + treatmentReason : "") +
      (date ? "&date=" + date : "") +
      (traineeSupervisorSsin ? "&traineeSupervisorSsin=" + traineeSupervisorSsin : "") +
      (traineeSupervisorNihii ? "&traineeSupervisorNihii=" + traineeSupervisorNihii : "") +
      (traineeSupervisorFirstName
        ? "&traineeSupervisorFirstName=" + traineeSupervisorFirstName
        : "") +
      (traineeSupervisorLastName ? "&traineeSupervisorLastName=" + traineeSupervisorLastName : "") +
      (guardPostNihii ? "&guardPostNihii=" + guardPostNihii : "") +
      (guardPostSsin ? "&guardPostSsin=" + guardPostSsin : "") +
      (guardPostName ? "&guardPostName=" + guardPostName : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("POST", _url, headers, _body)
      .then(doc => new models.SendAttestResultWithResponse(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
}
