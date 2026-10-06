/**
 * JavaScript / JSDoc Type Definitions for Digital Durga Puja 2026
 * Pure JavaScript equivalent of TypeScript interfaces.
 */

/**
 * @typedef {'bn' | 'en'} Language
 */

/**
 * @typedef {Object} SimulationMetric
 * @property {string} label
 * @property {string} value
 * @property {string} unit
 */

/**
 * @typedef {Object} ShaktiItem
 * @property {number} id
 * @property {string} traditionalWeaponBn
 * @property {string} traditionalWeaponEn
 * @property {string} divineDeityGift
 * @property {string} modernPowerBn
 * @property {string} modernPowerEn
 * @property {'Security' | 'Education' | 'Innovation' | 'Robotics' | 'Sustainability' | 'Arts' | 'Leadership' | 'Frontier AI' | 'Ethics' | 'Humanity'} domain
 * @property {string} iconName
 * @property {string} quoteBn
 * @property {string} quoteEn
 * @property {string} descriptionBn
 * @property {string} descriptionEn
 * @property {string} cstApplicationBn
 * @property {string} cstApplicationEn
 * @property {string} realWorldImpact
 * @property {SimulationMetric} simulationMetric
 */

/**
 * @typedef {Object} TechProject
 * @property {string} id
 * @property {string} titleBn
 * @property {string} titleEn
 * @property {string} taglineBn
 * @property {string} taglineEn
 * @property {'AI & Safety' | 'Robotics & Automation' | 'Smart Pandals & IoT' | 'Green Tech & Bio-Clay'} category
 * @property {string} image
 * @property {string} descriptionBn
 * @property {string} descriptionEn
 * @property {string[]} specifications
 * @property {string} impactMetric
 * @property {'crowd' | 'safety' | 'robotics' | 'green'} interactiveDemoType
 */

/**
 * @typedef {Object} GalleryPhoto
 * @property {string} id
 * @property {string} titleBn
 * @property {string} titleEn
 * @property {'Rituals' | 'Artisans' | 'Pandals' | 'Immersion'} category
 * @property {string} imageUrl
 * @property {string} location
 * @property {string} captionBn
 * @property {string} captionEn
 * @property {string} photographer
 * @property {string} license
 */

/**
 * @typedef {Object} PledgeCertificate
 * @property {string} recipientName
 * @property {string} departmentOrRole
 * @property {string} chosenPowerBn
 * @property {string} chosenPowerEn
 * @property {string} commitmentNote
 * @property {string} issuedAt
 * @property {string} certificateId
 */

export const SUPPORTED_LANGUAGES = ['bn', 'en'];
