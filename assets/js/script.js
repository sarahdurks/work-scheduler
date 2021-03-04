// Things to do

/*


MOMENT JS https://devhints.io/moment
a	am	AM/PM 
m = moment('2013-03-01', 'YYYY-MM-DD')
This parses the given date using the given format. Returns a moment object.

// DEFINE TODAY 
Awareness/display of current day/time - "current Day" in HTML
currentDay = moment().format('MMMM Do YYYY, h:mm:ss a'); -- looks like March 3rd 2021, 7:21:53 pm

// USE TIME TO SET COLOR STATE
if now = true (within current hour) --> red
if before, past = true --> grey
else if future (not now, not past) --> green

// MAP 1 HOUR BLOCKS
rows in containers (?) defined by the hour - e.g., row [9(=id) [text entry field] (save function)] -->
time = 9 a, create blank input event capability field
time = 10 a [row]
time = 11 a  [row]
time = 12 a [row]
only options in 9-5

event listener on buttons saving to row? based on row, not different ids

//BLOCK BEHAVIOR
if future, can edit
? check again if need to edit past in readme/gif
"click into" / "focus" an event, can enter and save text --> to local storage
Events save even if user refreshes - need to (?) check if local storage empty to repopulate

//UNKNOWNS
? if after hours rounds to next day
? Alert if user does not save
*/