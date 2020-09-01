import React from 'react';

import Avatar from './osu/Avatar';
import Country from './osu/Country';
import HigherStatistic from './osu/HigherStatistic';
import LowerStatistic from './osu/LowerStatistic';
import Row from './Row';
import User from './osu/User';

const Results = ({ firstPlayer, secondPlayer }) => {
    if (!firstPlayer.id || !secondPlayer.id) {
        return null;
    }

    return (
        <table className="ui compact celled table">
            <tbody>
                <Row>
                    <Avatar avatarUrls={[firstPlayer.avatar_url, secondPlayer.avatar_url]} />
                </Row>
                <Row>
                    <User ids={[firstPlayer.id, secondPlayer.id]} usernames={[firstPlayer.username, secondPlayer.username]} />
                </Row>
                <Row>
                    <HigherStatistic fieldName="Performance Points" fields={[firstPlayer.statistics.pp, secondPlayer.statistics.pp]} />
                </Row>
                <Row>
                    <LowerStatistic fieldName="Global Rank" fields={[firstPlayer.statistics.rank.global, secondPlayer.statistics.rank.global]} />
                </Row>
                <Row>
                    <Country countries={[firstPlayer.country, secondPlayer.country]} fieldName="Country" />
                </Row>
                {firstPlayer.country.code === secondPlayer.country.code ? // only compare country rank if both players originate from the same country
                    <Row>
                        <LowerStatistic fieldName="Country Rank" fields={[firstPlayer.statistics.rank.country, secondPlayer.statistics.rank.country]} />
                    </Row> : null
                }
                <Row>
                    <HigherStatistic fieldName="Ranked Score" fields={[firstPlayer.statistics.ranked_score, secondPlayer.statistics.ranked_score]} />
                </Row>
                <Row>
                    <HigherStatistic fieldName="Total Score" fields={[firstPlayer.statistics.total_score, secondPlayer.statistics.total_score]} />
                </Row>
                <Row>
                    <HigherStatistic fieldName="Maximum Combo" fields={[firstPlayer.statistics.maximum_combo, secondPlayer.statistics.maximum_combo]} />
                </Row>
                <Row>
                    <HigherStatistic fieldName="Total Hits" fields={[firstPlayer.statistics.total_hits, secondPlayer.statistics.total_hits]} />
                </Row>
                <Row>
                    <HigherStatistic fieldName="Accuracy (%)" fields={[firstPlayer.statistics.hit_accuracy, secondPlayer.statistics.hit_accuracy]} />
                </Row>
                <Row>
                    <HigherStatistic fieldName="Play Count" fields={[firstPlayer.statistics.play_count, secondPlayer.statistics.play_count]} />
                </Row>
                <Row>
                    <HigherStatistic fieldName="Replays Watched By Others" fields={[firstPlayer.statistics.replays_watched_by_others, secondPlayer.statistics.replays_watched_by_others]} />
                </Row>
                <Row>
                    <HigherStatistic fieldName="Level" fields={[firstPlayer.statistics.level.current, secondPlayer.statistics.level.current]} />
                </Row>
                <Row>
                    <HigherStatistic fieldName="Silver SS Count" fields={[firstPlayer.statistics.grade_counts.ssh, secondPlayer.statistics.grade_counts.ssh]} />
                </Row>
                <Row>
                    <HigherStatistic fieldName="SS Count" fields={[firstPlayer.statistics.grade_counts.ss, secondPlayer.statistics.grade_counts.ss]} />
                </Row>
                <Row>
                    <HigherStatistic fieldName="Silver S Count" fields={[firstPlayer.statistics.grade_counts.sh, secondPlayer.statistics.grade_counts.sh]} />
                </Row>
                <Row>
                    <HigherStatistic fieldName="S Count" fields={[firstPlayer.statistics.grade_counts.s, secondPlayer.statistics.grade_counts.s]} />
                </Row>
                <Row>
                    <HigherStatistic fieldName="A Count" fields={[firstPlayer.statistics.grade_counts.a, secondPlayer.statistics.grade_counts.a]} />
                </Row>
            </tbody>
        </table>
    );
}

export default Results;