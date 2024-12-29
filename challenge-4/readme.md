# Find the murderer

A person has been murdered on Halloween night 🔪. Using a spell 🧙‍♀️, we managed to hear their last whisper, but it’s very faint and doesn’t allow us to identify who the murderer could be.

The information provided:

**whisper:** a string that represents what the victim tried to say before dying.

**suspects:** a list of strings representing the **names of all the suspects.**

The _whisper_ has some rules:

- Each `~` represents an uncertain letter in the whisper.
- Each position in the whisper corresponds to a position in the murderer’s name.
- The length of the whisper doesn’t always represent the full length of the name, as the victim might have died before finishing.
- However, if the last character of the whisper is a `$`, then the murderer’s name ended there.

Your objective is to figure out who the murderer could be! You must return:

- If only one name matches the whisper’s pattern, return that name.
- If multiple names match, return all names separated by commas.
- If no names match, return an empty string (`""`).

Uppercase and lowercase letters do not matter.

``` javascript
const whisper = 'd~~~~~a';
const suspects = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'];

findTheKiller(whisper, suspects); // -> 'Dracula'

const whisper2 = '~r~dd~';
const suspects2 = ['Freddy', 'Freddier', 'Fredderic']

findTheKiller(whisper2, suspects2); // -> 'Freddy,Freddier,Fredderic'

const whisper3 = '~r~dd$';
const suspects3 = ['Freddy', 'Freddier', 'Fredderic']

findTheKiller(whisper3, suspects3); // -> ''

const whisper4 = 'mi~~def';
const suspects4 = ['Midudev', 'Midu', 'Madeval']

findTheKiller(whisper4, suspects4); // -> ''
```