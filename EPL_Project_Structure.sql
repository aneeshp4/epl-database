CREATE schema `epl_database`;
USE `epl_database`;

-- Team Table
CREATE TABLE Team (
    TeamID INT AUTO_INCREMENT PRIMARY KEY,
    TeamName VARCHAR(50),
    INDEX (TeamName)
);

-- Match Table
CREATE TABLE Matches (
    MatchID INT AUTO_INCREMENT PRIMARY KEY,
    Division VARCHAR(2),
    Date DATE,
    Time TIME,
    HomeTeam INT,
    AwayTeam INT,
    FTHG INT,
    FTAG INT,
    FTR CHAR(1),
    HTHG INT,
    HTAG INT,
    HTR CHAR(1),
    Referee VARCHAR(50),
    FOREIGN KEY (HomeTeam) REFERENCES Team(TeamID),
    FOREIGN KEY (AwayTeam) REFERENCES Team(TeamID)
);

-- FullTimeResults Table
CREATE TABLE FullTimeResults (
    ResultID INT AUTO_INCREMENT PRIMARY KEY,
    MatchID INT,
    FTHG INT,
    FTAG INT,
    FTR CHAR(1),
    FOREIGN KEY (MatchID) REFERENCES Matches(MatchID)
);

-- HalfTimeResults Table
CREATE TABLE HalfTimeResults (
    ResultID INT AUTO_INCREMENT PRIMARY KEY,
    MatchID INT,
    HTHG INT,
    HTAG INT,
    HTR CHAR(1),
    FOREIGN KEY (MatchID) REFERENCES Matches(MatchID)
);

-- Odds Table
CREATE TABLE Odds (
    OddsID INT AUTO_INCREMENT PRIMARY KEY,
    MatchID INT,
    HomeTeamOdds FLOAT,
    DrawOdds FLOAT,
    AwayTeamOdds FLOAT,
    B365H FLOAT,
    B365D FLOAT,
    B365A FLOAT,
    BWH FLOAT,
    BWD FLOAT,
    BWA FLOAT,
    IWH FLOAT,
    IWD FLOAT,
    IWA FLOAT,
    PSH FLOAT,
    PSD FLOAT,
    PSA FLOAT,
    WHH FLOAT,
    WHD FLOAT,
    WHA FLOAT,
    VCH FLOAT,
    VCD FLOAT,
    VCA FLOAT,
    MaxH FLOAT,
    MaxD FLOAT,
    MaxA FLOAT,
    AvgH FLOAT,
    AvgD FLOAT,
    AvgA FLOAT,
    B365Over25 FLOAT,
    B365Under25 FLOAT,
    POver25 FLOAT,
    PUnder25 FLOAT,
    MaxOver25 FLOAT,
    MaxUnder25 FLOAT,
    AvgOver25 FLOAT,
    AvgUnder25 FLOAT,
    AHh FLOAT,
    B365AHH FLOAT,
    B365AHA FLOAT,
    PAHH FLOAT,
    PAHA FLOAT,
    MaxAHH FLOAT,
    MaxAHA FLOAT,
    AvgAHH FLOAT,
    AvgAHA FLOAT,
    FOREIGN KEY (MatchID) REFERENCES Matches(MatchID)
);

-- Betting Table
CREATE TABLE Betting (
    BettingID INT AUTO_INCREMENT PRIMARY KEY,
    MatchID INT,
    FullTimeResultsID INT,
    HalfTimeResultsID INT, -- Added column for HalfTimeResultsID
    B365H FLOAT,
    B365D FLOAT,
    B365A FLOAT,
    BWH FLOAT,
    BWD FLOAT,
    BWA FLOAT,
    IWH FLOAT,
    IWD FLOAT,
    IWA FLOAT,
    PSH FLOAT,
    PSD FLOAT,
    PSA FLOAT,
    WHH FLOAT,
    WHD FLOAT,
    WHA FLOAT,
    VCH FLOAT,
    VCD FLOAT,
    VCA FLOAT,
    MaxH FLOAT,
    MaxD FLOAT,
    MaxA FLOAT,
    AvgH FLOAT,
    AvgD FLOAT,
    AvgA FLOAT,
    B365Over25 FLOAT,
    B365Under25 FLOAT,
    POver25 FLOAT,
    PUnder25 FLOAT,
    MaxOver25 FLOAT,
    MaxUnder25 FLOAT,
    AvgOver25 FLOAT,
    AvgUnder25 FLOAT,
    AHh FLOAT,
    B365AHH FLOAT,
    B365AHA FLOAT,
    PAHH FLOAT,
    PAHA FLOAT,
    MaxAHH FLOAT,
    MaxAHA FLOAT,
    AvgAHH FLOAT,
    AvgAHA FLOAT,
    FOREIGN KEY (MatchID) REFERENCES Matches(MatchID),
    FOREIGN KEY (FullTimeResultsID) REFERENCES FullTimeResults(ResultID),
    FOREIGN KEY (HalfTimeResultsID) REFERENCES HalfTimeResults(ResultID) -- Added foreign key constraint for HalfTimeResultsID
);





