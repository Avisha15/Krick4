import {AppOperation} from './../../index';
import {CUSTOMER_TYPE} from '../../types';

export default (appOperation: AppOperation) => ({
  log_out: (data: any) =>
    appOperation.post(`client_logout`, data, CUSTOMER_TYPE),
  get_profile: () =>
    appOperation.get(`user/profile`, undefined, undefined, CUSTOMER_TYPE),
  getSeriesData: () =>
    appOperation.post('TeamData/Serieslist', {}, CUSTOMER_TYPE),
  getContestList: id =>
    appOperation.get(
      `match/contests/${id}`,
      undefined,
      undefined,
      CUSTOMER_TYPE,
    ),
  getAllContest: (matchId, contestId) =>
    appOperation.get(
      `match/contests/${matchId}/${contestId}`,
      undefined,
      undefined,
      CUSTOMER_TYPE,
    ),
  getIntro: () =>
    appOperation.get('intro', undefined, undefined, CUSTOMER_TYPE),
  getMyTeam: id =>
    appOperation.get(
      `match/my-teams/${id}`,
      undefined,
      undefined,
      CUSTOMER_TYPE,
    ),
  getAllPlayers: id =>
    appOperation.get(
      `match/all-players/${id}`,
      undefined,
      undefined,
      CUSTOMER_TYPE,
    ),
  getMyJoinedContest: id =>
    appOperation.get(
      `match/my-contests/${id}`,
      undefined,
      undefined,
      CUSTOMER_TYPE,
    ),
  saveTeam: data => appOperation.post(`match/create-team`, data, CUSTOMER_TYPE),
  refresh_token: () =>
    appOperation.get(`user/refresh-token`, undefined, undefined, CUSTOMER_TYPE),
  getPrizeList: id =>
    appOperation.get(
      `match/winner-prizes/${id}`,
      undefined,
      undefined,
      CUSTOMER_TYPE,
    ),
  joinContest: data =>
    appOperation.post(`match/join-contest`, data, CUSTOMER_TYPE),
  getMyMatchesData: status =>
    appOperation.get(
      `match/list?status=${status}&limit=100&skip=0`,
      undefined,
      undefined,
      CUSTOMER_TYPE,
    ),
});
