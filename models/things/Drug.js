var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ activeIngredient: { type: Schema.Types.ObjectId, ref: 'activeIngredient' },
  administrationRoute: { type: Schema.Types.ObjectId, ref: 'administrationRoute' },
  alcoholWarning: { type: Schema.Types.ObjectId, ref: 'alcoholWarning' },
  availableStrength: { type: Schema.Types.ObjectId, ref: 'availableStrength' },
  breastfeedingWarning: { type: Schema.Types.ObjectId, ref: 'breastfeedingWarning' },
  clincalPharmacology: { type: Schema.Types.ObjectId, ref: 'clincalPharmacology' },
  cost: { type: Schema.Types.ObjectId, ref: 'cost' },
  dosageForm: { type: Schema.Types.ObjectId, ref: 'dosageForm' },
  doseSchedule: { type: Schema.Types.ObjectId, ref: 'doseSchedule' },
  drugClass: { type: Schema.Types.ObjectId, ref: 'drugClass' },
  foodWarning: { type: Schema.Types.ObjectId, ref: 'foodWarning' },
  interactingDrug: { type: Schema.Types.ObjectId, ref: 'interactingDrug' },
  isAvailableGenerically: { type: Schema.Types.ObjectId, ref: 'isAvailableGenerically' },
  isProprietary: { type: Schema.Types.ObjectId, ref: 'isProprietary' },
  labelDetails: { type: Schema.Types.ObjectId, ref: 'labelDetails' },
  legalStatus: { type: Schema.Types.ObjectId, ref: 'legalStatus' },
  manufacturer: { type: Schema.Types.ObjectId, ref: 'manufacturer' },
  mechanismOfAction: { type: Schema.Types.ObjectId, ref: 'mechanismOfAction' },
  nonProprietaryName: { type: Schema.Types.ObjectId, ref: 'nonProprietaryName' },
  overdosage: { type: Schema.Types.ObjectId, ref: 'overdosage' },
  pregnancyCategory: { type: Schema.Types.ObjectId, ref: 'pregnancyCategory' },
  pregnancyWarning: { type: Schema.Types.ObjectId, ref: 'pregnancyWarning' },
  prescribingInfo: { type: Schema.Types.ObjectId, ref: 'prescribingInfo' },
  prescriptionStatus: { type: Schema.Types.ObjectId, ref: 'prescriptionStatus' },
  relatedDrug: { type: Schema.Types.ObjectId, ref: 'relatedDrug' },
  warning: { type: Schema.Types.ObjectId, ref: 'warning' },
  adverseOutcome: { type: Schema.Types.ObjectId, ref: 'adverseOutcome' },
  contraindication: { type: Schema.Types.ObjectId, ref: 'contraindication' },
  duplicateTherapy: { type: Schema.Types.ObjectId, ref: 'duplicateTherapy' },
  indication: { type: Schema.Types.ObjectId, ref: 'indication' },
  seriousAdverseOutcome: { type: Schema.Types.ObjectId, ref: 'seriousAdverseOutcome' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  code: { type: Schema.Types.ObjectId, ref: 'code' },
  guideline: { type: Schema.Types.ObjectId, ref: 'guideline' },
  medicineSystem: { type: Schema.Types.ObjectId, ref: 'medicineSystem' },
  recognizingAuthority: { type: Schema.Types.ObjectId, ref: 'recognizingAuthority' },
  relevantSpecialty: { type: Schema.Types.ObjectId, ref: 'relevantSpecialty' },
  study: { type: Schema.Types.ObjectId, ref: 'study' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('Drug', schema);