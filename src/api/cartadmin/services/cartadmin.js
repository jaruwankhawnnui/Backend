'use strict';

/**
 * cartadmin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cartadmin.cartadmin');
