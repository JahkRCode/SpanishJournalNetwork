import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import { Header, Image } from 'react-native-elements';

export default class AboutUsHistory extends Component {
    state = {  }
    render() {
        return (
            <ImageBackground source={require('./../../assets/images/background.png')} style={{ width: '100%', flex: 1 }}>
                <ScrollView>
                    <Text style={styles.HistoryTitle}>
                        History of the Spanish Journal:
                    </Text>
                    <Text style={styles.HistoryText}>
                        The first issue of the Spanish Journal was printed August 8, 1979.
                        The issue was written in spanish and distributed throughout the spanish speaking areas of Milwaukee.
                        The publication was an over-night success, many phone calls from the community demanded to know when was the next edition.
                        With the success of the rst issue, the editors agreed to print the Journal once a week.
                        Since that time, Spanish Journal has become a mainstream of information and knowledge for the Latino Community in Milwaukee,
                        as well as Wisconsin. As the Latino community expanded so did we, leading to the creation of the Racine/Kenosha Spanish Journal.
                        As the years went on, the Spanish Journal changed it’s format from a spanish publication to a bilingual newspaper (Spanish/English)
                        to bring the plights and good fortunes of the Latino Community, to the minority and majority communities in Wisconsin.
                        Spanish Journal is a member of the following: Hispanic Chamber of Commerce of Wisconsin, The National Association of Hispanic Publication, 
                        The Hispanic Merchant’s Association, HispanoPress, News USA, Hispanic USA, Associated Press, International Bureau of Information
                        and the Minority Chamber of Commerce, just to name a few. Spanish Journal is more than a newspaper. We’re committed and dedicated in
                        delivering news and information tothe Wisconsin Latino Communities. Spanish Journal gets involved, we have visited many Wisconsin area schools
                        on career day, and provided students with an insight on journalism. We have sponsored various community events and contribute to the
                        economic, social, and educational growth and well-being to the residents of this community. Spanish Journal is the largest and
                        oldest weekly Latino newspaper in Wisconsin and take pride on saying “Periódico de la gente” The people’s paper.
                    </Text>
                </ScrollView>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    HistoryText: {
        flex: 1,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'KGHAPPY',
    },
    HistoryTitle: {
        flex: 1,
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'KGHAPPY',
    },

});