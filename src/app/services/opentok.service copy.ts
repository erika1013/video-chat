import { Injectable } from '@angular/core';

import * as OT from '@opentok/client';
import config from '../../config';
import config1 from 'src/config1';

@Injectable()
export class OpentokService {

  session: OT.Session;
  token: string;

  constructor() { }

  getOT() {
    return OT;
  }

  initSession() {
    if (config1.API_KEY && config1.TOKEN && config1.SESSION_ID) {
      this.session = this.getOT().initSession(config1.API_KEY, config1.SESSION_ID);
      this.token = config1.TOKEN;
      return Promise.resolve(this.session);
    } else {
      return fetch(config1.SAMPLE_SERVER_BASE_URL + '/session')
        .then((data) => data.json())
        .then((json) => {
          this.session = this.getOT().initSession(json.apiKey, json.sessionId);
          this.token = json.token;
          return this.session;
        });
    }
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.session.connect(this.token, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(this.session);
        }
      });
    });
  }
}