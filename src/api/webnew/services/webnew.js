'use strict';

/**
 * webnew service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::webnew.webnew');
