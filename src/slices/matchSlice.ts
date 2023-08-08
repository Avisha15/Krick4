import {createSlice} from '@reduxjs/toolkit';
import {appOperation} from '../appOperation';
import {toastAlert} from '../helper/utility';

export const initialState = {
  upcomingMatches: [],
  myTeams: [],
  myContest: [],
  myMatchesData: [],
  isLoading: false,
  myMatchesHome: [],
  loading: true,
  isContestEntry: false,
  selectedMatch: undefined,
};

export const matchSlice = createSlice({
  name: 'match',
  initialState,
  reducers: {
    setUpComingMatches: (state, {payload}) => {
      state.upcomingMatches = payload;
      state.loading = false;
    },
    setLoading: (state, {payload}) => {
      state.isLoading = payload;
    },
    setMyTeam: (state, {payload}) => {
      state.myTeams = payload;
    },
    setMyContest: (state, {payload}) => {
      state.myContest = payload;
    },
    setMyMatchesData: (state, {payload}) => {
      state.myMatchesData = payload;
    },
    setMyMatchesHome: (state, {payload}) => {
      state.myMatchesHome = payload;
    },
    setIsContestEntry: (state, {payload}) => {
      state.isContestEntry = payload;
    },
    setSelectedMatch: (state, {payload}) => {
      state.selectedMatch = payload;
    },
  },
});

export const {
  setUpComingMatches,
  setMyTeam,
  setMyContest,
  setMyMatchesData,
  setLoading,
  setMyMatchesHome,
  setIsContestEntry,
  setSelectedMatch,
} = matchSlice.actions;
export default matchSlice.reducer;

export const getMyTeam = data => async dispatch => {
  try {
    const res = await appOperation.customer.getMyTeam(data);
    if (res.code == 200) {
      dispatch(setMyTeam(res.data));
    }
  } catch {}
};

export const getMyJoinedContest = data => async dispatch => {
  try {
    const res = await appOperation.customer.getMyJoinedContest(data);
    if (res.code == 200) {
      dispatch(setMyContest(res?.data));
    }
  } catch (e) {
    console.log(e);
  }
};

export const joinContest = data => async dispatch => {
  try {
    const res = await appOperation.customer.joinContest(data);
    if (res.code == 200) {
      toastAlert.showToastError(res?.message);
    }
  } catch (e) {
    console.log(e);
  }
};

export const getMyMatches = status => async dispatch => {
  try {
    dispatch(setLoading(true));
    const res = await appOperation.customer.getMyMatchesData(status);
    console.log('res:::::', res);

    if (res?.code === 200) {
      dispatch(setMyMatchesData(res.data));
    }
    dispatch(setLoading(false));
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(setLoading(false));
  }
};
