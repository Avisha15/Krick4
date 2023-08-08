import React from 'react';
import {FlatList, View} from 'react-native';
import {AppText, POPPINS, POPPINS_BOLD, SIXTEEN} from '../../../common/AppText';
import NavigationService from '../../../navigation/NavigationService';
import {ALL_CONTEST_LIST} from '../../../navigation/routes';
import ContestCard from '../contestCard/ContestCard';
import ViewAll from '../viewAll/ViewAll';

const Contest = ({details, matchDetails, totalTeamCount}) => {
  // console.log('details Contest', details);

  const renderContest = ({item}) => {
    return (
      <ContestCard
        details={item}
        matchDetails={matchDetails}
        totalTeamCount={totalTeamCount}
        contestDetails={details}
      />
    );
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <AppText
          type={SIXTEEN}
          style={{color: 'black', marginTop: 15, marginBottom: 10}}
          weight={POPPINS}>
          {details?.name}
        </AppText>
        {details?.more && (
          <ViewAll
            onPress={() =>
              NavigationService.navigate(ALL_CONTEST_LIST, {
                matchDetails,
                contestId: details?.data[0]?.contest_category_id,
                contestName: details?.name,
              })
            }
          />
        )}
      </View>
      <FlatList data={details?.data} renderItem={renderContest} />
    </>
  );
};

export default Contest;
