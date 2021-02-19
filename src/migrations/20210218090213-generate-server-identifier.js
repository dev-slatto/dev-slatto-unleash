'use strict';

const { v4 } = require('uuid');

exports.up = function(db, cb) {
    const instanceId = v4();
    db.runSql(
        `
    INSERT INTO settings(name, content) VALUES ('instanceInfo', json_build_object('id', '${instanceId}'));
  `,
        cb,
    );
};

exports.down = function(db, cb) {
    db.runSql(
        `
        DROP FROM settings WHERE name = 'instanceInfo'
        `,
        cb,
    );
};
