const scenes = {
    start: {
        label: "Start",
        title: "Walking Home",
        image: "images/school-sidewalk.jpg",
        alt: "A sidewalk near school",
        description:
            "You are walking home from school after a long day. The sidewalk is busy, but you notice a wallet lying near the edge of the curb. When you pick it up, you find $100, an ID card, and a phone number written on a small piece of paper. Nobody around you seems to notice.",
        choices: [
            {
                text: "Call the phone number right away.",
                nextScene: "callNumber"
            },
            {
                text: "Bring the wallet to the police station.",
                nextScene: "policeStation"
            },
            {
                text: "Keep the money and continue walking.",
                nextScene: "keepMoney"
            },
            {
                text: "Take the wallet to the school office.",
                nextScene: "schoolOffice"
            }
        ]
    },

    callNumber: {
        label: "Choice",
        title: "The Phone Call",
        image: "images/phone-call.jpg",
        alt: "A person holding a phone",
        description:
            "You take out your phone and call the number from the wallet. A worried voice answers. The person explains that the wallet belongs to their older brother, who lost it after picking up medicine and groceries. They sound relieved, but now you have to decide how to return it safely.",
        choices: [
            {
                text: "Meet the owner in a public place near the school.",
                nextScene: "meetOwner"
            },
            {
                text: "Tell them you will drop it off at the police station instead.",
                nextScene: "policeStation"
            },
            {
                text: "Get nervous and hang up before explaining everything.",
                nextScene: "guiltLater"
            }
        ]
    },

    policeStation: {
        label: "Choice",
        title: "The Police Station",
        image: "images/police-station.jpg",
        alt: "A police station or official building",
        description:
            "You decide not to take any chances. You bring the wallet to the police station and explain where you found it. The officer checks the ID and says they will contact the owner. You leave feeling like you made the safest decision.",
        choices: [
            {
                text: "Continue to the ending.",
                nextScene: "goodEndingPolice"
            }
        ]
    },

    keepMoney: {
        label: "Choice",
        title: "The Temptation",
        image: "images/wallet-closeup.jpg",
        alt: "A close-up of a wallet",
        description:
            "You stare at the $100. Part of you knows the wallet is not yours, but another part of you starts thinking about everything you could buy. You take the cash, put the wallet in your bag, and keep walking. At first, it feels like nobody saw anything.",
        choices: [
            {
                text: "Go to school the next day and act normal.",
                nextScene: "friendAsks"
            },
            {
                text: "Spend some of the money after school.",
                nextScene: "spendMoney"
            },
            {
                text: "Feel guilty and call the number later.",
                nextScene: "guiltLater"
            }
        ]
    },

    schoolOffice: {
        label: "Choice",
        title: "The School Office",
        image: "images/school-hallway.jpg",
        alt: "A school hallway",
        description:
            "Instead of going to the police, you bring the wallet to the school office. The office staff look through the ID and recognize the name. They say the owner’s younger sibling goes to your school. You realize the wallet was closer to home than you expected.",
        choices: [
            {
                text: "Leave the wallet with the office and walk away.",
                nextScene: "goodEndingSchool"
            },
            {
                text: "Change your mind, take the money, and leave the wallet.",
                nextScene: "caughtSchool"
            }
        ]
    },

    meetOwner: {
        label: "Choice",
        title: "Meeting the Owner",
        image: "images/owner-meeting.jpg",
        alt: "A public meeting place",
        description:
            "You meet the owner near a busy deli close to the school. They check the wallet and look extremely relieved. They explain that the money was important because they needed it for their family. They thank you for being honest when you easily could have walked away.",
        choices: [
            {
                text: "Continue to the ending.",
                nextScene: "goodEndingOwner"
            }
        ]
    },

    guiltLater: {
        label: "Choice",
        title: "The Guilty Feeling",
        image: "images/ending-reflection.jpg",
        alt: "A quiet street scene",
        description:
            "Later that day, the wallet keeps bothering you. Even though you tried to ignore it, you keep thinking about the ID card and the person who may be looking for it. You realize the situation is not just about money. It is about the kind of person you want to be.",
        choices: [
            {
                text: "Call the number and admit you found the wallet.",
                nextScene: "neutralEndingLateCall"
            },
            {
                text: "Return the wallet to the school office the next morning.",
                nextScene: "neutralEndingSchool"
            },
            {
                text: "Ignore the guilt and pretend nothing happened.",
                nextScene: "badEndingIgnore"
            }
        ]
    },

    friendAsks: {
        label: "Choice",
        title: "The Friend’s Question",
        image: "images/school-hallway.jpg",
        alt: "A school hallway",
        description:
            "The next day, your friend asks if you found a wallet. They say someone at school is stressed because their family member lost one nearby. Suddenly, the situation feels much more real. You can either tell the truth or protect yourself.",
        choices: [
            {
                text: "Return the wallet and apologize.",
                nextScene: "neutralEndingApology"
            },
            {
                text: "Pretend you never saw the wallet.",
                nextScene: "badEndingLie"
            },
            {
                text: "Ask your friend for more information before deciding.",
                nextScene: "secondChance"
            }
        ]
    },

    secondChance: {
        label: "Choice",
        title: "A Second Chance",
        image: "images/phone-call.jpg",
        alt: "A person checking their phone",
        description:
            "Your friend explains that the person who lost the wallet has been checking around the school and nearby stores. You feel nervous because you still have the wallet. This might be your last easy chance to fix the situation.",
        choices: [
            {
                text: "Give the wallet back before things get worse.",
                nextScene: "neutralEndingApology"
            },
            {
                text: "Keep lying and hope nobody finds out.",
                nextScene: "badEndingCamera"
            }
        ]
    },

    spendMoney: {
        label: "Choice",
        title: "Spending the Money",
        image: "images/wallet-closeup.jpg",
        alt: "Money inside a wallet",
        description:
            "You spend part of the money on food and a few things you wanted. For a moment, it feels good. But later, you hear people talking about the lost wallet. Now you do not even have the full amount to return.",
        choices: [
            {
                text: "Admit what happened and return what is left.",
                nextScene: "neutralEndingPartial"
            },
            {
                text: "Say nothing and hope it disappears.",
                nextScene: "badEndingCamera"
            }
        ]
    },

    caughtSchool: {
        label: "Choice",
        title: "Caught at School",
        image: "images/security-camera.jpg",
        alt: "A security camera",
        description:
            "You leave the wallet at the office but take the money first. You think nobody will know. Later, the office checks the hallway cameras and sees you opening the wallet before turning it in.",
        choices: [
            {
                text: "Continue to the ending.",
                nextScene: "badEndingCamera"
            }
        ]
    },

    goodEndingOwner: {
        label: "Good Ending",
        title: "Honesty Pays Off",
        image: "images/owner-meeting.jpg",
        alt: "A public meeting place",
        description:
            "The owner thanks you for being honest and gives you a small reward. More importantly, you walk away knowing you did the right thing without needing anyone to force you. The choice was simple, but it showed your character.",
        choices: []
    },

    goodEndingPolice: {
        label: "Good Ending",
        title: "The Safe Choice",
        image: "images/police-station.jpg",
        alt: "A police station or official building",
        description:
            "The police contact the owner, and the wallet is returned safely. You may not get a dramatic reward, but you know you handled the situation responsibly. Sometimes doing the right thing is quiet, but it still matters.",
        choices: []
    },

    goodEndingSchool: {
        label: "Good Ending",
        title: "Doing the Right Thing at School",
        image: "images/school-hallway.jpg",
        alt: "A school hallway",
        description:
            "The school office contacts the family, and the wallet gets back to the owner. Later, your friend tells you the person was grateful. You realize that honesty can affect people you might not even know personally.",
        choices: []
    },

    neutralEndingApology: {
        label: "Neutral Ending",
        title: "A Hard Apology",
        image: "images/ending-reflection.jpg",
        alt: "A quiet sidewalk",
        description:
            "You return the wallet and apologize. The owner is upset because you waited and made the situation harder, but they still appreciate that you eventually told the truth. You do not feel proud, but you learn from the mistake.",
        choices: []
    },

    neutralEndingLateCall: {
        label: "Neutral Ending",
        title: "Late, But Honest",
        image: "images/phone-call.jpg",
        alt: "A phone call scene",
        description:
            "You call the number later and explain that you found the wallet. The owner is disappointed that you waited, but they are relieved to get it back. You realize that honesty is easier when you choose it early.",
        choices: []
    },

    neutralEndingSchool: {
        label: "Neutral Ending",
        title: "The Next Morning",
        image: "images/school-hallway.jpg",
        alt: "A school hallway",
        description:
            "You bring the wallet to the school office the next morning. The staff are glad you turned it in, but they ask why you waited. You do not get in serious trouble, but the situation teaches you that delaying the right choice still has consequences.",
        choices: []
    },

    neutralEndingPartial: {
        label: "Neutral Ending",
        title: "Returning What Is Left",
        image: "images/ending-reflection.jpg",
        alt: "A reflective street scene",
        description:
            "You admit that you spent some of the money and return what is left. The owner is frustrated, and you have to take responsibility for what you did. It is not a perfect ending, but telling the truth keeps the situation from getting worse.",
        choices: []
    },

    badEndingLie: {
        label: "Bad Ending",
        title: "The Lie Gets Bigger",
        image: "images/security-camera.jpg",
        alt: "A security camera",
        description:
            "You tell your friend you never saw the wallet. But the lie does not stay small. More people start asking questions, and you become nervous every time someone mentions it. Eventually, your story falls apart.",
        choices: []
    },

    badEndingCamera: {
        label: "Bad Ending",
        title: "The Camera Saw Everything",
        image: "images/security-camera.jpg",
        alt: "A security camera",
        description:
            "Later, security footage shows you picking up the wallet. Because you lied and kept the money, the situation becomes much worse than it needed to be. You get in trouble, and people lose trust in you.",
        choices: []
    },

    badEndingIgnore: {
        label: "Bad Ending",
        title: "Ignoring It Was a Choice Too",
        image: "images/security-camera.jpg",
        alt: "A security camera",
        description:
            "You try to forget about the wallet, but the problem does not disappear. The owner keeps looking, your friend starts asking questions, and eventually someone remembers seeing you near the sidewalk. Doing nothing becomes its own kind of decision.",
        choices: []
    }
};

const sceneLabel = document.getElementById("sceneLabel");
const sceneTitle = document.getElementById("sceneTitle");
const sceneDescription = document.getElementById("sceneDescription");
const sceneImage = document.getElementById("sceneImage");
const choicesContainer = document.getElementById("choices");
const homeLink = document.getElementById("homeLink");

function showScene(sceneName) {
    const scene = scenes[sceneName];

    sceneLabel.textContent = scene.label;
    sceneTitle.textContent = scene.title;
    sceneDescription.textContent = scene.description;
    sceneImage.src = scene.image;
    sceneImage.alt = scene.alt;

    choicesContainer.innerHTML = "";

    if (scene.choices.length > 0) {
        scene.choices.forEach(function(choice) {
            const choiceLink = document.createElement("a");

            choiceLink.href = "#story";
            choiceLink.textContent = choice.text;
            choiceLink.classList.add("choice-link");

            choiceLink.addEventListener("click", function(event) {
                event.preventDefault();
                showScene(choice.nextScene);
                document.getElementById("story").scrollIntoView({
                    behavior: "smooth"
                });
            });

            choicesContainer.appendChild(choiceLink);
        });
    } else {
        const restartButton = document.createElement("button");

        restartButton.textContent = "Restart Story";
        restartButton.classList.add("restart-button");

        restartButton.addEventListener("click", function() {
            showScene("start");
            document.getElementById("story").scrollIntoView({
                behavior: "smooth"
            });
        });

        choicesContainer.appendChild(restartButton);
    }
}

homeLink.addEventListener("click", function(event) {
    event.preventDefault();

    showScene("start");

    document.getElementById("story").scrollIntoView({
        behavior: "smooth"
    });
});

showScene("start");
