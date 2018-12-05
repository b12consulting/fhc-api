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

import * as models from "./models"

export class CDDAYPERIOD {
  constructor(json: JSON | any) {
    Object.assign(this as CDDAYPERIOD, json)
  }
  dn?: string

  l?: string

  s?: string

  sv?: string

  value?: CDDAYPERIOD.ValueEnum
}
export namespace CDDAYPERIOD {
  export enum ValueEnum {
    AFTERBREAKFAST = <any>"AFTERBREAKFAST",
    AFTERDINNER = <any>"AFTERDINNER",
    AFTERLUNCH = <any>"AFTERLUNCH",
    AFTERMEAL = <any>"AFTERMEAL",
    AFTERNOON = <any>"AFTERNOON",
    BEFOREBREAKFAST = <any>"BEFOREBREAKFAST",
    BEFOREDINNER = <any>"BEFOREDINNER",
    BEFORELUNCH = <any>"BEFORELUNCH",
    BETWEENBREAKFASTANDLUNCH = <any>"BETWEENBREAKFASTANDLUNCH",
    BETWEENDINNERANDSLEEP = <any>"BETWEENDINNERANDSLEEP",
    BETWEENLUNCHANDDINNER = <any>"BETWEENLUNCHANDDINNER",
    BETWEENMEALS = <any>"BETWEENMEALS",
    EVENING = <any>"EVENING",
    MORNING = <any>"MORNING",
    NIGHT = <any>"NIGHT",
    THEHOUROFSLEEP = <any>"THEHOUROFSLEEP",
    DURINGBREAKFAST = <any>"DURINGBREAKFAST",
    DURINGLUNCH = <any>"DURINGLUNCH",
    DURINGDINNER = <any>"DURINGDINNER"
  }
}
