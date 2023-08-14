
DESCRIBE RawData;

-- Adding all teams to Team table
INSERT INTO Team (TeamName)
SELECT TeamName
FROM (
    SELECT HomeTeam AS TeamName FROM RawData
    UNION
    SELECT AwayTeam AS TeamName FROM RawData
) AS CombinedTeams;

SELECT * FROM Team ORDER by TeamID;

-- Adding all matches into Matches table
INSERT INTO Matches (Division, Date, Time, HomeTeam, AwayTeam, FTHG, FTAG, FTR, HTHG, HTAG, HTR, Referee, AC, AF, AR, AY, `AS`, AST, HC, HF, HR, HY, HS, HST)
SELECT r.Div, STR_TO_DATE(r.Date, '%d/%m/%Y'), STR_TO_DATE(r.Time, '%H:%i'),
		t1.TeamID, t2.TeamID, r.FTHG, r.FTAG, r.FTR, r.HTHG, r.HTAG, r.HTR, r.Referee, r.AC, r.AF, r.AR, r.AY, r.`AS`, r.AST, r.HC, r.HF, r.HR, r.HY, r.HS, r.HST
FROM RawData AS r
JOIN Team AS t1 ON r.HomeTeam = t1.TeamName
JOIN Team AS t2 ON r.AwayTeam = t2.TeamName;

SELECT * FROM Matches;

-- Adding the Full Time Results to the FullTimeResults table
INSERT INTO FullTimeResults(MatchID, FTHG, FTAG, FTR)
SELECT MatchID, FTHG, FTAG, FTR
FROM Matches;

SELECT * FROM FullTimeResults;

-- Adding the Half Time Results to the HalfTimeResults table
INSERT INTO HalfTimeResults(MatchID, HTHG, HTAG, HTR)
SELECT MatchID, HTHG, HTAG, HTR
FROM Matches;

SELECT * FROM HalfTimeResults;

-- Adding the Odds to the Odds Table
INSERT INTO Odds(MatchID, FullTimeResultsID, HalfTimeResultsID, B365H, B365D, B365A, BWH, BWD, BWA, IWH, IWD, IWA, PSH, PSD, PSA, WHH, WHD, WHA, VCH, VCD, VCA, MaxH, MaxD, MaxA, AvgH, AvgD, AvgA)
SELECT mt.MatchID, ftr.ResultID, htr.ResultID, r.B365H, r.B365D, r.B365A, r.BWH, r.BWD, r.BWA, r.IWH, r.IWD, r.IWA, r.PSH, r.PSD, r.PSA, r.WHH, r.WHD, r.WHA, r.VCH, r.VCD, r.VCA, r.MaxH, r.MaxD, r.MaxA, r.AvgH, r.AvgD, r.AvgA
FROM (SELECT m.MatchID, m.Date, m.Time, t1.TeamName AS HomeTeamName, t2.TeamName AS AwayTeamName
	FROM Matches m
	JOIN Team t1 ON m.HomeTeam = t1.TeamID
	JOIN Team t2 ON m.AwayTeam = t2.TeamID) AS mt
JOIN FullTimeResults ftr ON mt.MatchID = ftr.MatchID
JOIN HalfTimeResults htr ON mt.MatchID = htr.MatchID
JOIN RawData r ON STR_TO_DATE(r.Date, '%d/%m/%Y') = mt.Date AND STR_TO_DATE(r.Time, '%H:%i') = mt.Time AND r.HomeTeam = mt.HomeTeamName AND r.AwayTeam = mt.AwayTeamName;

SELECT * FROM Odds;

-- Adding the Asian Handicap Betting Odds to the AsianHandicapBetting table
INSERT INTO AsianHandicapBetting(MatchID, FullTimeResultsID, HalfTimeResultsID, AHh, B365AHH, B365AHA, PAHH, PAHA, MaxAHH, MaxAHA, AvgAHH, AvgAHA)
SELECT mt.MatchID, ftr.ResultID, htr.ResultID, r.AHh, r.B365AHH, r.B365AHA, r.PAHH, r.PAHA, r.MaxAHH, r.MaxAHA, r.AvgAHH, r.AvgAHA
FROM (SELECT m.MatchID, m.Date, m.Time, t1.TeamName AS HomeTeamName, t2.TeamName AS AwayTeamName
	FROM Matches m
	JOIN Team t1 ON m.HomeTeam = t1.TeamID
	JOIN Team t2 ON m.AwayTeam = t2.TeamID) AS mt
JOIN FullTimeResults ftr ON mt.MatchID = ftr.MatchID
JOIN HalfTimeResults htr ON mt.MatchID = htr.MatchID
JOIN RawData r ON STR_TO_DATE(r.Date, '%d/%m/%Y') = mt.Date AND STR_TO_DATE(r.Time, '%H:%i') = mt.Time AND r.HomeTeam = mt.HomeTeamName AND r.AwayTeam = mt.AwayTeamName;

SELECT * FROM AsianHandicapBetting;

-- Adding the Over Under Betting Odds to the OverUnderBetting table
INSERT INTO OverUnderBetting(MatchID, FullTimeResultsID, HalfTimeResultsID, B365Over25, B365Under25, POver25, PUnder25, MaxOver25, MaxUnder25, AvgOver25, AvgUnder25)
SELECT  mt.MatchID, ftr.ResultID, htr.ResultID, r.`B365>2.5`, r.`B365<2.5`, r.`P>2.5`, r.`P<2.5`, r.`Max>2.5`, r.`Max<2.5`, r.`Avg>2.5`, r.`Avg<2.5`
FROM (SELECT m.MatchID, m.Date, m.Time, t1.TeamName AS HomeTeamName, t2.TeamName AS AwayTeamName
	FROM Matches m
	JOIN Team t1 ON m.HomeTeam = t1.TeamID
	JOIN Team t2 ON m.AwayTeam = t2.TeamID) AS mt
JOIN FullTimeResults ftr ON mt.MatchID = ftr.MatchID
JOIN HalfTimeResults htr ON mt.MatchID = htr.MatchID
JOIN RawData r ON STR_TO_DATE(r.Date, '%d/%m/%Y') = mt.Date AND STR_TO_DATE(r.Time, '%H:%i') = mt.Time AND r.HomeTeam = mt.HomeTeamName AND r.AwayTeam = mt.AwayTeamName;

SELECT * FROM OverUnderBetting;


