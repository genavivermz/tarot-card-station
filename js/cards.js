const CARDS = [
  {
    id: "fool",
    name: "The Fool",
    arcana: "Major Arcana",
    number: "0",
    image: "cards/00-the-fool.jpg",
    keywords: { upright: "beginnings, faith, adventure", reversed: "recklessness, hesitation, naivety" },
    upright: "A leap of faith. The Fool is the start of the journey — open, unburdened, and willing to step into the unknown. This card asks you to trust the road even when you cannot see the end of it. New chapters, travel, creative risk, and beginner’s luck all live here. Stay curious, travel light, and let wonder lead.",
    reversed: "The cliff edge is closer than it looks. Reversed, The Fool can mean rushing in without looking, or freezing because the unknown feels too large. You may be acting on impulse, ignoring warnings, or clinging to safety when a true beginning is asking to be made. Pause long enough to choose the leap — then take it with both eyes open."
  },
  {
    id: "magician",
    name: "The Magician",
    arcana: "Major Arcana",
    number: "I",
    image: "cards/01-the-magician.jpg",
    keywords: { upright: "will, skill, manifestation", reversed: "trickery, unused talent, scattered will" },
    upright: "You already have the tools. The Magician stands with wand, cup, sword, and pentacle on the table — every suit, every resource, ready to be directed. This is focused will: talent meeting intention. Speak what you want, then shape it. Communication, craft, and first moves are favored. As above, so below: what you concentrate on can take form.",
    reversed: "Power without purpose, or purpose without follow-through. The Magician reversed can point to unused gifts, clever talk that does not become action, or manipulation — of others or of yourself. Check whether you are performing competence instead of practicing it. Gather your tools again and aim them at one true thing."
  },
  {
    id: "high-priestess",
    name: "The High Priestess",
    arcana: "Major Arcana",
    number: "II",
    image: "cards/02-the-high-priestess.jpg",
    keywords: { upright: "intuition, mystery, inner knowing", reversed: "secrets, silence ignored, disconnected intuition" },
    upright: "Not everything that matters can be proven out loud. The High Priestess sits between the pillars, keeper of what is felt before it is named. Trust the quiet information: dreams, hunches, the pause before you speak. Study, solitude, and patience reveal more than forcing an answer. Something is ripening behind the veil — wait for it, and listen.",
    reversed: "The inner voice is being drowned out, or you are hiding from what you already know. Secrets may be leaking, intuition dismissed, or mystery used as a way to avoid honesty. Come back to stillness. The High Priestess reversed asks you to stop outsourcing your knowing and to tell the truth — at least to yourself."
  },
  {
    id: "empress",
    name: "The Empress",
    arcana: "Major Arcana",
    number: "III",
    image: "cards/03-the-empress.jpg",
    keywords: { upright: "abundance, nurture, creation", reversed: "depletion, smothering, blocked creativity" },
    upright: "Life wants to grow through you. The Empress is fertile ground: art, body, home, garden, relationship, project. Beauty is not extra here — it is nourishment. Care for what you are making, and for yourself as the maker. Pleasure, generosity, and the natural world restore you. Let things ripen in their own season.",
    reversed: "The well is running low. You may be giving until nothing is left, numbing with comfort, or unable to bring a creative idea into the world. The Empress reversed can also show neglect of the body or of a relationship that needs tending. Soften the pressure. Feed yourself first, then tend what you love."
  },
  {
    id: "emperor",
    name: "The Emperor",
    arcana: "Major Arcana",
    number: "IV",
    image: "cards/04-the-emperor.jpg",
    keywords: { upright: "structure, authority, stability", reversed: "rigidity, control, weak boundaries" },
    upright: "Build the throne, then sit in it. The Emperor is order, protection, and the kind of leadership that makes a life feel solid. Rules, plans, and fatherly or institutional power can work for you now. Take responsibility. Draw the map. A firm structure is not the enemy of freedom — it is what lets freedom last.",
    reversed: "Control has curdled into domination, or authority has collapsed into chaos. The Emperor reversed can be the tyrant, the absent leader, or the person who will not claim their own power. Check where you are too rigid — or too willing to let someone else run your life. Rebuild structure that serves, not structure that cages."
  },
  {
    id: "hierophant",
    name: "The Hierophant",
    arcana: "Major Arcana",
    number: "V",
    image: "cards/05-the-hierophant.jpg",
    keywords: { upright: "tradition, teaching, shared belief", reversed: "dogma, rebellion, outdated rules" },
    upright: "There is wisdom in the well-worn path. The Hierophant is teacher, rite, mentor, and the living tradition that outlasts one person. Seek counsel, study a craft, join a community of practice. Marriage, vows, and institutions may be highlighted. You do not have to invent meaning from nothing — you can inherit it, then make it your own.",
    reversed: "The old script no longer fits. Reversed, The Hierophant questions blind obedience, empty ritual, or a teacher who wants followers more than students. You may need to leave a belief system, or to trust your own interpretation over the official one. Keep the wisdom. Release the cage."
  },
  {
    id: "lovers",
    name: "The Lovers",
    arcana: "Major Arcana",
    number: "VI",
    image: "cards/06-the-lovers.jpg",
    keywords: { upright: "union, choice, alignment", reversed: "discord, temptation, misaligned values" },
    upright: "A sacred choice. The Lovers is union — romantic, creative, or the marriage of two parts of yourself — and it is also the moment you choose what you will stand for. Harmony comes when desire and values point the same way. Speak honestly. Let attraction be guided by integrity. What you join yourself to, you become.",
    reversed: "A split in the heart. Values and desire are pulling apart; a relationship may be out of tune, or a choice is being avoided. Temptation, infidelity of attention, or staying for the wrong reasons can appear here. Come back to what you actually believe. The right union cannot be built on a dishonest yes."
  },
  {
    id: "chariot",
    name: "The Chariot",
    arcana: "Major Arcana",
    number: "VII",
    image: "cards/07-the-chariot.jpg",
    keywords: { upright: "willpower, victory, direction", reversed: "force without aim, loss of control" },
    upright: "Harness the opposing forces and drive. The Chariot is triumph through discipline: two sphinxes, two directions, one driver. Ambition, travel, competition, and hard-won progress belong here. You can win this if you stay in the seat. Focus, armor up, and move. Momentum is a kind of magic.",
    reversed: "The reins are slipping. You may be pushing too hard, pulled in two directions, or winning a battle that is not worth the cost. The Chariot reversed asks whether your will is serving you — or running you. Slow the vehicle. Choose one road. Victory that wrecks the driver is not victory."
  },
  {
    id: "strength",
    name: "Strength",
    arcana: "Major Arcana",
    number: "VIII",
    image: "cards/08-strength.jpg",
    keywords: { upright: "courage, compassion, inner force", reversed: "self-doubt, force, untamed fear" },
    upright: "The lion is not defeated — it is befriended. Strength is courage with a soft hand: patience, stamina, and the kind of power that does not need to shout. You can meet a fierce feeling, a hard person, or a long task without becoming brutal. Gentle does not mean weak. Stay with it. Your heart is stronger than the thing that scares you.",
    reversed: "The lion has the upper hand, or you have locked it in a cage. Fear, shame, or raw anger may be driving the scene. You might be harsh with yourself, or so afraid of your own force that you go small. Strength reversed asks for honest courage: neither domination nor collapse. Breathe. Then meet the beast as an ally."
  },
  {
    id: "hermit",
    name: "The Hermit",
    arcana: "Major Arcana",
    number: "IX",
    image: "cards/09-the-hermit.jpg",
    keywords: { upright: "solitude, guidance, inner light", reversed: "isolation, withdrawal, lost lantern" },
    upright: "Step back to see. The Hermit climbs with a lantern not to hide, but to find the next true step. Solitude, study, and sober reflection are medicine now. A mentor may appear — or you may become one. Answers will not come from the crowd. Take the lamp inward. The path is quieter than you thought, and clearer.",
    reversed: "Alone has become lonely, or you are using exile to avoid the work. The Hermit reversed can be isolation that no longer teaches, a guide you refuse, or a refusal to sit with yourself at all. Come back into right relationship with silence — enough to hear, not so much that you disappear."
  },
  {
    id: "wheel-of-fortune",
    name: "Wheel of Fortune",
    arcana: "Major Arcana",
    number: "X",
    image: "cards/10-wheel-of-fortune.jpg",
    keywords: { upright: "turning point, luck, cycles", reversed: "setback, resistance to change, bad timing" },
    upright: "The wheel turns. Fate, luck, and the larger pattern are in motion — a chapter is changing whether you planned it or not. This can be a fortunate break, a sudden opportunity, or the sense that life is rearranging the furniture. Ride the turn. What goes down will rise; what is stuck will move. Stay flexible and keep faith with the cycle.",
    reversed: "You are fighting the turn, or the luck has run out for a spell. Delays, repeating patterns, and a sense of being at the bottom of the wheel can appear. The lesson is not to freeze. Notice the cycle you keep living, then step differently when the next spoke comes around. Change is still coming — meet it on purpose."
  },
  {
    id: "justice",
    name: "Justice",
    arcana: "Major Arcana",
    number: "XI",
    image: "cards/11-justice.jpg",
    keywords: { upright: "truth, fairness, cause and effect", reversed: "bias, dishonesty, delayed justice" },
    upright: "The scales are watching. Justice is truth made visible: contracts, legal matters, accountability, and the clean line between action and consequence. Tell it straight. Make the fair call. What you have sown is coming due — for good or for ill — and integrity is the way through. Cut away what is not true.",
    reversed: "The scales are tipped. Unfairness, denial, or a refusal to own your part can cloud the reading. You may be judging too harshly, or not at all. Legal delays and moral gray zones belong here. Justice reversed asks you to get honest, even if the honest answer is uncomfortable. Fairness starts with you."
  },
  {
    id: "hanged-man",
    name: "The Hanged Man",
    arcana: "Major Arcana",
    number: "XII",
    image: "cards/12-the-hanged-man.jpg",
    keywords: { upright: "surrender, new perspective, pause", reversed: "stalling, martyrdom, needless sacrifice" },
    upright: "Hang long enough to see the world upside down. This is a willing pause, not a punishment: surrender, delay, and the wisdom that only comes when you stop struggling. A sacrifice of ego, time, or old certainty opens a different view. Let yourself be suspended. The answer is in the stillness, not in the next push.",
    reversed: "You are stuck, not sacred. The Hanged Man reversed can mean stalling dressed up as patience, playing the martyr, or refusing the pause you actually need. If you have already seen the new view, it is time to come down and live it. If you have not, stop thrashing. Choose the surrender instead of enduring it."
  },
  {
    id: "death",
    name: "Death",
    arcana: "Major Arcana",
    number: "XIII",
    image: "cards/13-death.jpg",
    keywords: { upright: "ending, transformation, release", reversed: "resistance to change, lingering, stagnation" },
    upright: "Something is finished, and that is the mercy. Death is the necessary ending that makes a true beginning possible — a job, a story about yourself, a relationship shape, a season of life. Do not romanticize what is already gone. Grieve it, compost it, and let the field go fallow. Transformation is not optional here. It is already underway.",
    reversed: "The ending is being postponed, and the cost is a kind of living death. Clinging, fear of change, or a slow decay that no one will name can show up. Death reversed asks you to stop bargaining with what is over. Let it go on purpose, so the next life can start."
  },
  {
    id: "temperance",
    name: "Temperance",
    arcana: "Major Arcana",
    number: "XIV",
    image: "cards/14-temperance.jpg",
    keywords: { upright: "balance, alchemy, patience", reversed: "excess, imbalance, lost middle path" },
    upright: "Pour from one cup into the other until the mix is right. Temperance is alchemy: patience, moderation, and the blending of opposites into something livable. Healing takes time. So does a good collaboration, a recovered body, a middle path. Do not force the formula. Small, steady adjustments create the gold.",
    reversed: "Too much of one thing, not enough of the other. Excess, impatience, or a refusal to integrate two parts of your life can throw the mixture off. Temperance reversed is the hangover after all-or-nothing. Come back to the middle. Mix again, slower."
  },
  {
    id: "devil",
    name: "The Devil",
    arcana: "Major Arcana",
    number: "XV",
    image: "cards/15-the-devil.jpg",
    keywords: { upright: "bondage, appetite, shadow", reversed: "release, breaking chains, facing the shadow" },
    upright: "Look at the chain. The Devil names the bond that feels like fate and is often habit: addiction, toxic attachment, materialism, shame, or a story that says you have no choice. Desire is not the enemy — unconscious desire is. Name the shadow. The chains are loose enough to slip if you stop pretending they are locked.",
    reversed: "The first links are coming off. This can be a breakthrough — sobriety, leaving a damaging dynamic, or finally seeing the pattern — or a messy, incomplete unbinding. Do not swap one chain for another. The Devil reversed is freedom in progress. Keep going, and be honest about what still has a hold."
  },
  {
    id: "tower",
    name: "The Tower",
    arcana: "Major Arcana",
    number: "XVI",
    image: "cards/16-the-tower.jpg",
    keywords: { upright: "upheaval, revelation, collapse", reversed: "delayed disaster, fear of change, aftershock" },
    upright: "Lightning finds the false foundation. The Tower is sudden truth: a shock, a breakup of structure, a revelation you cannot un-know. What was built on a lie cannot stand. It will feel like disaster. It is also a clearing. Let the rubble be rubble. You will build again, but not the same tower, and not on the same ground.",
    reversed: "The crack is there, and you can still hear it. Avoidance may delay the fall, or you are living in the aftershock, picking through wreckage. The Tower reversed can be a private collapse no one else sees. Do not patch a doomed wall. Take the truth now, on your feet, rather than waiting for it to take you."
  },
  {
    id: "star",
    name: "The Star",
    arcana: "Major Arcana",
    number: "XVII",
    image: "cards/17-the-star.jpg",
    keywords: { upright: "hope, healing, inspiration", reversed: "discouragement, lost faith, dimmed hope" },
    upright: "After the storm, water and light. The Star is hope that is not naive — healing, inspiration, and a future you can actually feel. Pour out what you have. Receive what the night offers. Creativity, spiritual renewal, and gentle recovery belong here. You are not done. The sky is still mapped with a way through.",
    reversed: "The well feels dry. Discouragement, cynicism, or a creative drought can dim the star. You may be asking for a blaze when a small light would be enough. Rest. Remember what used to nourish you. Hope reversed is not hope gone — it is hope that needs tending, one quiet cup at a time."
  },
  {
    id: "moon",
    name: "The Moon",
    arcana: "Major Arcana",
    number: "XVIII",
    image: "cards/18-the-moon.jpg",
    keywords: { upright: "dreams, illusion, the unconscious", reversed: "clarity returning, fear faced, secrets surfacing" },
    upright: "The path is real, but the light is borrowed. The Moon is dream, anxiety, intuition, and all the shapes fear can throw on the water. Not everything you feel is fact — and not everything you cannot prove is false. Go slowly. Watch the cycles. Art, night-work, and the unconscious are speaking. Do not sprint. Do not pretend you can see the whole road.",
    reversed: "The fog is thinning. Secrets come up, a confusion lifts, or you finally name the fear that was running the show. The Moon reversed can also mean denying intuition in favor of a false calm. Stay with what is becoming clear. Dawn is not the same as pretending it was never night."
  },
  {
    id: "sun",
    name: "The Sun",
    arcana: "Major Arcana",
    number: "XIX",
    image: "cards/19-the-sun.jpg",
    keywords: { upright: "joy, vitality, success", reversed: "temporary cloud, inner child wounded, delayed joy" },
    upright: "Full daylight. The Sun is warmth, success, health, and the simple happiness of being alive without apology. Clarity returns. Children, creative play, and public good fortune are favored. What was hidden can be seen and celebrated. Say yes to the life that wants to be lived out loud. You do not have to earn the light. Stand in it.",
    reversed: "The sun is still there — a cloud is passing. Joy delayed, confidence dented, or a brightness you cannot quite feel can appear. You may be performing happiness, or guarding a wounded inner child. The Sun reversed is not a curse. Warmth is available in smaller doses. Let it in where it can reach."
  },
  {
    id: "judgement",
    name: "Judgement",
    arcana: "Major Arcana",
    number: "XX",
    image: "cards/20-judgement.jpg",
    keywords: { upright: "awakening, reckoning, calling", reversed: "self-judgment, refusal to rise, unfinished past" },
    upright: "The horn sounds, and the dead sit up. Judgement is a reckoning and a resurrection: the past is reviewed so you can step into a larger life. Forgiveness, vocation, and a second chance belong here. Hear the call. Answer it. This is not punishment — it is the moment you become who you have been becoming all along.",
    reversed: "The call is going unanswered. Harsh self-judgment, fear of being seen, or unfinished business with the past can keep you in the grave of an old identity. Judgement reversed asks you to stop retrying the same case. Forgive what can be forgiven. Rise anyway."
  },
  {
    id: "world",
    name: "The World",
    arcana: "Major Arcana",
    number: "XXI",
    image: "cards/21-the-world.jpg",
    keywords: { upright: "completion, wholeness, arrival", reversed: "almost there, loose ends, incomplete cycle" },
    upright: "The dance closes, and the circle is whole. The World is completion: a project finished, a journey integrated, a self that finally includes all its parts. Travel, public success, and a sense of belonging in a larger life are here. Celebrate. Then, when you are ready, the Fool’s road will open again — but you will walk it as someone who has already come home once.",
    reversed: "The last inch is the longest. Something is nearly complete and not quite sealed: a loose end, a lesson not integrated, a celebration postponed. The World reversed is not failure. It is an invitation to finish honestly, not to start the next cycle while the last one is still open."
  },
  {
    id: "ace-wands",
    name: "Ace of Wands",
    arcana: "Minor Arcana · Wands",
    number: "Ace",
    image: "cards/wands-01-ace.jpg",
    keywords: { upright: "spark, inspiration, new fire", reversed: "false start, drained will, delayed spark" },
    upright: "A wand is offered, still smoking. This is the first yes of a creative or passionate venture — a beginning with heat in it. Say yes while the spark is live. Projects, desire, and courage want a body. Do not overthink the fire. Catch it.",
    reversed: "The match will not catch, or it flares and dies. Timing, fear, or a lack of fuel can stall the beginning. Wait for a true spark, not a restless itch. When it comes, protect it from the wind of overcommitment."
  },
  {
    id: "two-wands",
    name: "Two of Wands",
    arcana: "Minor Arcana · Wands",
    number: "Two",
    image: "cards/wands-02.jpg",
    keywords: { upright: "planning, future vision, the world in hand", reversed: "fear of the unknown, small plans, indecision" },
    upright: "You have the world in your hands and a wand planted in what you already own. The Two of Wands is the view from the rampart: ambition, travel, and the plan before the departure. Choose a horizon. The next life will not come to the castle. You have to walk toward it.",
    reversed: "The map is being studied so long the ship leaves. Playing small, fearing the larger world, or refusing to pick a direction keeps you on the wall. You already know enough to take the first step. Take it."
  },
  {
    id: "three-wands",
    name: "Three of Wands",
    arcana: "Minor Arcana · Wands",
    number: "Three",
    image: "cards/wands-03.jpg",
    keywords: { upright: "expansion, ships returning, foresight", reversed: "delays, narrow vision, waiting too long" },
    upright: "The ships are on the water. What you launched is in motion — expansion, overseas or long-range plans, and the patience of someone who can already see the return. Stand in your progress. The world is answering. Keep your gaze wide.",
    reversed: "The harbor is quiet too long. Delays, a plan that does not scale, or disappointment in what comes back can appear. Recalibrate the voyage. Foresight still matters — just aim it at what is actually happening, not only at what you hoped."
  },
  {
    id: "four-wands",
    name: "Four of Wands",
    arcana: "Minor Arcana · Wands",
    number: "Four",
    image: "cards/wands-04.jpg",
    keywords: { upright: "homecoming, celebration, foundation", reversed: "unstable home, postponed joy, tension in the house" },
    upright: "Raise the bower. This is harvest-home: a wedding, a housewarming, a milestone worth marking. Community, stability, and the joy of arriving somewhere you can rest. Celebrate in public. You have built enough to pause under the flowers.",
    reversed: "The party is strained, or the foundation under the house is still shifting. Moving, family tension, or a celebration that does not feel earned can show. You can still honor the milestone. Just tell the truth about what still needs building."
  },
  {
    id: "five-wands",
    name: "Five of Wands",
    arcana: "Minor Arcana · Wands",
    number: "Five",
    image: "cards/wands-05.jpg",
    keywords: { upright: "conflict, competition, clash of wills", reversed: "inner conflict, avoiding the fight, needless strife" },
    upright: "Five sticks, five egos, one dusty field. This is rivalry, brainstorming that feels like a brawl, or the healthy heat of competition. Do not take every blow as an insult. Some fights clarify. Stay in it long enough to find the real issue — then fight fair.",
    reversed: "The scuffle is inside you, or everyone is tired of the noise. Avoidance of conflict can be as costly as the conflict itself. Pick the battle that matters. Drop the ones that are only theater."
  },
  {
    id: "six-wands",
    name: "Six of Wands",
    arcana: "Minor Arcana · Wands",
    number: "Six",
    image: "cards/wands-06.jpg",
    keywords: { upright: "victory, recognition, public success", reversed: "ego, lack of credit, private win" },
    upright: "The laurel is for you. Success becomes visible: praise, a win, a ride through town with the news already out. Receive it. Share it. This is not arrogance if the work was real. Let yourself be seen winning.",
    reversed: "The parade is delayed, stolen, or happening only in your own head. You may crave recognition too much, or do excellent work that no one names. The Six of Wands reversed asks for a quieter pride — and a check on whether the victory is actually yours."
  },
  {
    id: "seven-wands",
    name: "Seven of Wands",
    arcana: "Minor Arcana · Wands",
    number: "Seven",
    image: "cards/wands-07.jpg",
    keywords: { upright: "defense, conviction, holding the high ground", reversed: "overwhelm, giving up the hill, paranoia" },
    upright: "They are coming up the hill, and you still have the high ground. Protect what you have built. Conviction, boundaries, and a willingness to stand alone if you must. You do not need everyone to agree. You need to hold the line that is yours.",
    reversed: "The hill is exhausting. Too many opponents, or a defensive crouch that has become a way of life. You may be fighting ghosts. Choose which challenges are real. It is allowed to come down from the ridge and rest."
  },
  {
    id: "eight-wands",
    name: "Eight of Wands",
    arcana: "Minor Arcana · Wands",
    number: "Eight",
    image: "cards/wands-08.jpg",
    keywords: { upright: "swiftness, news, momentum", reversed: "delays, mixed signals, scattered energy" },
    upright: "Eight wands in flight. News, travel, and events move fast. Align with the speed: send the message, take the trip, ride the momentum. This is not a time to over-plan. It is a time to aim and release.",
    reversed: "Arrows in the mud. Delays, crossed wires, or too many things in the air at once. Slow your send. One clear message beats eight hurried ones. Wait for a cleaner wind."
  },
  {
    id: "nine-wands",
    name: "Nine of Wands",
    arcana: "Minor Arcana · Wands",
    number: "Nine",
    image: "cards/wands-09.jpg",
    keywords: { upright: "resilience, last stand, guarded strength", reversed: "burnout, walls too high, suspicion" },
    upright: "Wounded, still standing, still watching the horizon. You have been through it, and you are not done. This is stamina, healthy caution, and the last push before rest. Guard what matters. You are closer to the end of this fight than it feels.",
    reversed: "The guard will not come off duty. Exhaustion, paranoia, or a refusal to believe the war could be over. Put one wand down. Not every approaching figure is an enemy. Recovery is also a form of courage."
  },
  {
    id: "ten-wands",
    name: "Ten of Wands",
    arcana: "Minor Arcana · Wands",
    number: "Ten",
    image: "cards/wands-10.jpg",
    keywords: { upright: "burden, responsibility, the last mile", reversed: "release of load, delegation, collapse" },
    upright: "You can see the town, and you can barely see over the wood. Success has a weight. You took this on — maybe too much of it. Finish what you must, then set some of it down. Duty is noble until it becomes a way to avoid asking for help.",
    reversed: "The bundle is slipping, or you are finally handing pieces off. Overload, martyrdom, or the wisdom of delegation. You do not have to carry every wand to the gate. Drop the ones that were never yours."
  },
  {
    id: "page-wands",
    name: "Page of Wands",
    arcana: "Minor Arcana · Wands",
    number: "Page",
    image: "cards/wands-11-page.jpg",
    keywords: { upright: "messenger of fire, curiosity, first adventure", reversed: "scattered spark, unreliability, false alarm" },
    upright: "A young fire looking for a place to burn. News of a creative venture, a restless learner, a first trip, a bold idea still in draft. Stay curious. Follow the heat. The Page does not need a master plan — only enough courage to start walking.",
    reversed: "The message fizzles, or the enthusiasm has no follow-through. Dabbling, mixed signals, or a fear of looking foolish can stall the Page. Reignite with a smaller, realer experiment. Leave the performance out of it."
  },
  {
    id: "knight-wands",
    name: "Knight of Wands",
    arcana: "Minor Arcana · Wands",
    number: "Knight",
    image: "cards/wands-12-knight.jpg",
    keywords: { upright: "bold action, passion, pursuit", reversed: "impulsiveness, burnout, all heat no aim" },
    upright: "The horse rears, the desert is wide, and the Knight rides anyway. Fast passion, travel, and charismatic pursuit. This energy gets things moving. Channel it toward a worthy quest, and enjoy the heat of being fully in.",
    reversed: "A charge with no destination. Recklessness, temper, or a passion that leaves scorched earth. Slow the horse. Charm without follow-through is just weather. Point the fire, or it will spend itself on nothing."
  },
  {
    id: "queen-wands",
    name: "Queen of Wands",
    arcana: "Minor Arcana · Wands",
    number: "Queen",
    image: "cards/wands-13-queen.jpg",
    keywords: { upright: "confidence, warmth, magnetic will", reversed: "jealousy, dimmed fire, demanding ego" },
    upright: "She sits in sunlight with a sunflower and a black cat — seen, warm, and in command of her own fire. Confidence that includes others, creative leadership, and a life that is allowed to be vivid. Own your stage. Your warmth is a form of power.",
    reversed: "The fire turns petty, or it goes out to please the room. Jealousy, image-management, or a confidence crash. The Queen reversed asks you to tend your own hearth before performing brightness for anyone else."
  },
  {
    id: "king-wands",
    name: "King of Wands",
    arcana: "Minor Arcana · Wands",
    number: "King",
    image: "cards/wands-14-king.jpg",
    keywords: { upright: "visionary leadership, bold rule, enterprise", reversed: "tyranny of vision, impulsiveness, ego on the throne" },
    upright: "A king who leads from the front of the fire. Vision, entrepreneurship, and the authority to turn a spark into a kingdom. Be generous with your certainty. People will follow a clear flame. Direct the heat toward a future large enough for others, not only for you.",
    reversed: "The vision has become a demand. Domineering leadership, a temper on the throne, or big talk with a shaky plan. King of Wands reversed asks you to lead with warmth, not heat-stroke. Share the fire. Do not scorch the court."
  },
  {
    id: "ace-cups",
    name: "Ace of Cups",
    arcana: "Minor Arcana · Cups",
    number: "Ace",
    image: "cards/cups-01-ace.jpg",
    keywords: { upright: "new love, open heart, spiritual gift", reversed: "blocked feeling, empty cup, love withheld" },
    upright: "The cup overflows. A new emotional beginning — love, friendship, art, or a spiritual opening — is being offered. Receive it. Feel it. Let the heart be wet again. This is grace, not a transaction. Drink.",
    reversed: "The cup is turned, or the water will not pour. Numbness, a love that cannot land, or fear of feeling. You may need to empty an old grief before a new one can fill. The gift is still there. Soften enough to notice it."
  },
  {
    id: "two-cups",
    name: "Two of Cups",
    arcana: "Minor Arcana · Cups",
    number: "Two",
    image: "cards/cups-02.jpg",
    keywords: { upright: "partnership, mutual love, recognition", reversed: "imbalance, broken trust, missed connection" },
    upright: "Two cups raised, a caduceus between. This is reciprocity: romance, a true friendship, a healing pact. Being seen and seeing back. Equality in the heart. What you offer is met. That is rarer than it sounds — honor it.",
    reversed: "The toast is uneven. One person pouring more, a disconnection, or a partnership out of tune. Repair is possible if both will come back to the table. If not, name the imbalance instead of drinking around it."
  },
  {
    id: "three-cups",
    name: "Three of Cups",
    arcana: "Minor Arcana · Cups",
    number: "Three",
    image: "cards/cups-03.jpg",
    keywords: { upright: "friendship, revelry, chosen family", reversed: "gossip, overindulgence, isolation from the circle" },
    upright: "Three women dance with cups lifted. Community, celebration, and the medicine of being among your people. Share the joy. Collaboration and friendship are highlighted. You do not have to do this life as a solo act.",
    reversed: "The party has an aftertaste. Exclusion, third-party trouble, or celebrating to avoid feeling. Reversed, this card can also mean you need a quieter table. Choose the circle that actually nourishes you."
  },
  {
    id: "four-cups",
    name: "Four of Cups",
    arcana: "Minor Arcana · Cups",
    number: "Four",
    image: "cards/cups-04.jpg",
    keywords: { upright: "apathy, turning inward, the refused gift", reversed: "waking up, accepting the offer, restlessness ending" },
    upright: "Three cups at the feet, a fourth offered from the cloud, and the figure looking away. Discontent, emotional withdrawal, a gift you will not see because you are sitting in the old feeling. The pause may be needed. Just do not miss what is being handed to you while you brood.",
    reversed: "The head lifts. Apathy breaking, a yes after a long no, or finally noticing the cup in the air. You may still feel foggy. Movement is starting. Take the offer that is actually in front of you."
  },
  {
    id: "five-cups",
    name: "Five of Cups",
    arcana: "Minor Arcana · Cups",
    number: "Five",
    image: "cards/cups-05.jpg",
    keywords: { upright: "grief, regret, what was spilled", reversed: "acceptance, turning toward what remains" },
    upright: "Three cups down, two still standing, a cloaked figure facing the loss. Mourning is honest here. Do not skip it. And when you can, turn. The river, the bridge, and the remaining cups are still in the picture. Grief and hope can share a bank.",
    reversed: "The cloak is loosening. Forgiveness, a first look at what was not lost, or the decision to cross the bridge. You do not have to be done grieving to begin again. Face the two cups that are still full."
  },
  {
    id: "six-cups",
    name: "Six of Cups",
    arcana: "Minor Arcana · Cups",
    number: "Six",
    image: "cards/cups-06.jpg",
    keywords: { upright: "nostalgia, childhood, sweet memory", reversed: "stuck in the past, rose-colored memory, growing up" },
    upright: "A gift of flowers in an old courtyard. Innocence, reunion, and the kindness of the past. Someone or something from before returns with sweetness. Let yourself be tender. Just remember that memory is a place to visit, not a house to live in.",
    reversed: "The past has too strong a hold, or it was never as simple as the story. Clinging to childhood, an old romance, or a rewritten history. Six of Cups reversed asks you to keep the sweetness and leave the trap. The present also knows how to give."
  },
  {
    id: "seven-cups",
    name: "Seven of Cups",
    arcana: "Minor Arcana · Cups",
    number: "Seven",
    image: "cards/cups-07.jpg",
    keywords: { upright: "choices, fantasy, illusion", reversed: "clarity, one real cup, waking from the dream" },
    upright: "Seven visions in the cloud: castle, jewels, snake, wreath, and the rest. Possibility is rich, and so is illusion. Daydreams, options, and temptations crowd the air. Choose with the body, not only the wish. Not every cup is drinkable.",
    reversed: "The fog thins and one cup looks real. Decision after confusion, or the crash after a fantasy. You may feel disappointed that the dream was only a dream. That disappointment is useful. Pick the option that can survive daylight."
  },
  {
    id: "eight-cups",
    name: "Eight of Cups",
    arcana: "Minor Arcana · Cups",
    number: "Eight",
    image: "cards/cups-08.jpg",
    keywords: { upright: "walking away, seeking more, soul journey", reversed: "fear of leaving, drifting back, unfinished departure" },
    upright: "The cups are stacked, and still something is missing. So you walk, moonlit, toward the mountain. This is the brave leaving: a job, a love, a life that is almost enough. You are not ungrateful. You are unfinished. Go toward the thing the heart knows is higher.",
    reversed: "One foot on the path, one in the old camp. Fear of the unknown, or leaving and returning in a loop. Either stay and make it true, or leave cleanly. The Eight of Cups reversed hates a half-departure."
  },
  {
    id: "nine-cups",
    name: "Nine of Cups",
    arcana: "Minor Arcana · Cups",
    number: "Nine",
    image: "cards/cups-09.jpg",
    keywords: { upright: "wish fulfilled, satisfaction, emotional plenty", reversed: "hollowness, overindulgence, wish at a cost" },
    upright: "The merchant of happiness sits before his nine cups. A wish granted, pleasure taken, a moment of being pleased with your life. Enjoy it without apology. Just remember that display is not the same as depth — but tonight, the display is allowed to be enough.",
    reversed: "The cups look full and the body does not. Overdoing pleasure, a wish that disappoints, or happiness performed for the room. Ask what would actually satisfy you. Then pour that, even if it is quieter than the nine-cup wall."
  },
  {
    id: "ten-cups",
    name: "Ten of Cups",
    arcana: "Minor Arcana · Cups",
    number: "Ten",
    image: "cards/cups-10.jpg",
    keywords: { upright: "emotional fulfillment, family, rainbow home", reversed: "cracks in the picture, family tension, ideal vs real" },
    upright: "A rainbow of cups over a home. This is the heart’s harvest: family (blood or chosen), lasting love, and a sense that the emotional world has come right. Gratitude is the practice. Let the picture be lived, not only posed.",
    reversed: "The rainbow is a postcard. Family strain, a relationship that looks whole and does not feel it, or an ideal you are punishing real people with. Ten of Cups reversed asks for the messy, true home — less postcard, more repair."
  },
  {
    id: "page-cups",
    name: "Page of Cups",
    arcana: "Minor Arcana · Cups",
    number: "Page",
    image: "cards/cups-11-page.jpg",
    keywords: { upright: "messenger of the heart, intuition, creative surprise", reversed: "emotional immaturity, blocked muse, moodiness" },
    upright: "A fish in a cup, and a young face willing to be surprised. News of the heart, a creative whim, a tender beginning. Stay open to the odd message. Feeling is a form of intelligence. Answer the fish.",
    reversed: "The fish is ignored, or the feelings are all weather and no letter. Moodiness, a crush that will not speak, or art that stays in the daydream. Page of Cups reversed wants one honest feeling, spoken or made, instead of a fog of almosts."
  },
  {
    id: "knight-cups",
    name: "Knight of Cups",
    arcana: "Minor Arcana · Cups",
    number: "Knight",
    image: "cards/cups-12-knight.jpg",
    keywords: { upright: "romance, invitation, following the heart", reversed: "moodiness, empty charm, unrealistic quest" },
    upright: "The knight of the Grail rides with a cup offered. Romance, an invitation, an artistic quest. Follow what is beautiful, and let your approach be gracious. This is the messenger of feeling in motion. Receive the offer, or become it.",
    reversed: "The quest is all costume. Inconstancy, seduction without substance, or drowning in mood. Knight of Cups reversed asks you to feel and to land. Charm is not a plan. Love needs a road, not only a poem."
  },
  {
    id: "queen-cups",
    name: "Queen of Cups",
    arcana: "Minor Arcana · Cups",
    number: "Queen",
    image: "cards/cups-13-queen.jpg",
    keywords: { upright: "emotional wisdom, compassion, deep feeling", reversed: "overwhelmed, codependence, feelings uncontained" },
    upright: "She gazes into a closed, ornate cup — feeling as a practiced art. Empathy, counsel, and the ability to hold another’s water without drowning. Trust your inner tide. Care is a skill. You can be soft and still have a throne.",
    reversed: "The water is over the banks. Taking on everyone’s weather, numbing, or using sensitivity as a reason not to choose. Queen of Cups reversed needs a shore. Feel fully. Then put the cup down and rest."
  },
  {
    id: "king-cups",
    name: "King of Cups",
    arcana: "Minor Arcana · Cups",
    number: "King",
    image: "cards/cups-14-king.jpg",
    keywords: { upright: "emotional mastery, calm counsel, mature love", reversed: "repression, mood as weather, manipulation" },
    upright: "A throne on water, and the sea does not tip him. Mature feeling: the counselor, the artist who can finish, the partner who stays present in the storm. Lead with heart and with a steady hand. You can know the depth without being ruled by every wave.",
    reversed: "The sea is in the throne. Coldness dressed as control, emotional blackmail, or a king who will not feel at all. King of Cups reversed asks for honest weather. Mastery is not numbness. Feel, then steer."
  },
  {
    id: "ace-swords",
    name: "Ace of Swords",
    arcana: "Minor Arcana · Swords",
    number: "Ace",
    image: "cards/swords-01-ace.jpg",
    keywords: { upright: "clarity, truth, a cutting insight", reversed: "confusion, harsh words, truth misused" },
    upright: "A sword through the crown of cloud. A new idea, a decision, a truth that cuts clean. Speak it. Write it. Cut the cord that was already dead. Mental clarity and just beginnings are gifted here. Let the blade be kind and exact.",
    reversed: "The sword is heavy or turned the wrong way. Confusion, cruelty in the name of honesty, or an idea that will not land. Wait for a cleaner thought. Truth without compassion is just another wound."
  },
  {
    id: "two-swords",
    name: "Two of Swords",
    arcana: "Minor Arcana · Swords",
    number: "Two",
    image: "cards/swords-02.jpg",
    keywords: { upright: "stalemate, blocked heart, a choice postponed", reversed: "the blindfold slips, indecision breaking, information incoming" },
    upright: "Blindfolded between two blades, the moon on the water. You are protecting yourself with a pause. That may be wise. It may also be a refusal to feel what the choice requires. You cannot hold the swords forever. When you are ready, take off the cloth.",
    reversed: "The stalemate cracks. A decision arrives, or anxiety makes sitting still impossible. You may be flooded with information you used to block. Choose with the facts you have. The middle of the blades is no longer safer than a side."
  },
  {
    id: "three-swords",
    name: "Three of Swords",
    arcana: "Minor Arcana · Swords",
    number: "Three",
    image: "cards/swords-03.jpg",
    keywords: { upright: "heartbreak, sorrow, painful truth", reversed: "the first repair, releasing the story, grief softening" },
    upright: "Three swords in a heart, rain on the field. Heartbreak, betrayal, or a truth that hurts because it is accurate. Do not skip the weather. Pain named is already beginning to move. Let the heart be pierced and still be a heart.",
    reversed: "The swords are coming out, slowly. Forgiveness, the end of a rumination, or a wound you are finally done living inside. Healing is not forgetting. It is no longer arranging your whole life around the rain."
  },
  {
    id: "four-swords",
    name: "Four of Swords",
    arcana: "Minor Arcana · Swords",
    number: "Four",
    image: "cards/swords-04.jpg",
    keywords: { upright: "rest, recovery, mental truce", reversed: "restlessness, burnout, refusal to stop" },
    upright: "The knight on the tomb, three swords on the wall, one beneath. This is sacred rest after battle — retreat, meditation, convalescence. Your mind needs a chapel. Stop strategizing. Healing is the work now.",
    reversed: "You will not lie down, or you have lain down too long. Exhaustion, insomnia of the spirit, or rest that has become hiding. Four of Swords reversed asks for true recovery: enough stillness to mend, then a return to the living."
  },
  {
    id: "five-swords",
    name: "Five of Swords",
    arcana: "Minor Arcana · Swords",
    number: "Five",
    image: "cards/swords-05.jpg",
    keywords: { upright: "hollow victory, conflict, winning ugly", reversed: "a chance to make peace, lingering resentment" },
    upright: "Someone gathers the swords; others walk away under a torn sky. You can win this and still lose the room. Ego, cutting words, a fight that did not have to be this way. Ask whether the victory is worth the field you leave behind.",
    reversed: "The swords can be put down. An apology, a refusal to keep the old war, or the sour taste of a win you no longer want. Five of Swords reversed is a chance to leave the beach. Take it before pride writes the next round."
  },
  {
    id: "six-swords",
    name: "Six of Swords",
    arcana: "Minor Arcana · Swords",
    number: "Six",
    image: "cards/swords-06.jpg",
    keywords: { upright: "passage, leaving trouble, calmer water", reversed: "unfinished crossing, baggage, unable to move on" },
    upright: "A boat, a ferryman, figures hooded, swords upright in the hull. You are leaving a harder shore. The water is not yet glass, but it is better. Travel, recovery, a mental passage. You may carry the swords with you. Carry them toward quieter water anyway.",
    reversed: "The boat will not push off, or it keeps circling. Unfinished business, a move you fear, or bringing so much baggage the hull sits low. Six of Swords reversed says the leaving is still the medicine. Pack less. Go."
  },
  {
    id: "seven-swords",
    name: "Seven of Swords",
    arcana: "Minor Arcana · Swords",
    number: "Seven",
    image: "cards/swords-07.jpg",
    keywords: { upright: "strategy, theft, acting alone", reversed: "confession, getting caught, a smarter honesty" },
    upright: "Five swords in hand, two left in the field, looking back. Cunning, a solo plan, something taken or hidden. This can be necessary strategy — or a habit of slipping out the back. Be honest about whether you are protecting yourself or betraying a trust, including your own.",
    reversed: "The path back through the camp is watched. Secrets surfacing, guilt, or the decision to stop sneaking. A cleaner strategy is available: fewer swords stolen, more truth spoken. Getting caught can be a mercy."
  },
  {
    id: "eight-swords",
    name: "Eight of Swords",
    arcana: "Minor Arcana · Swords",
    number: "Eight",
    image: "cards/swords-08.jpg",
    keywords: { upright: "feeling trapped, mental prison, helplessness", reversed: "finding the way out, a belief loosening" },
    upright: "Bound, blindfolded, fenced by swords, water at the feet — and the castle still on the hill. The prison is mostly thought. Anxiety, victimhood, a story that says there is no door. There is a door. The bindings are looser than they feel. Think one new thought, then take one step.",
    reversed: "A hand finds the knot. The beginning of freedom, therapy that works, a belief that finally shows its seam. You may still be in the field. You are no longer sure the swords are a wall. Keep undoing the cloth."
  },
  {
    id: "nine-swords",
    name: "Nine of Swords",
    arcana: "Minor Arcana · Swords",
    number: "Nine",
    image: "cards/swords-09.jpg",
    keywords: { upright: "anxiety, 3 a.m. mind, despair", reversed: "the nightmare easing, asking for help, light at the edge" },
    upright: "Nine swords on the wall, a figure sitting up in the dark. This is the night mind: worry, shame, a grief that rehearses itself. You are not your thoughts at 3 a.m. Name the fear. Get it out of the bed. Help is not a failure. Dawn is a fact, even when you cannot feel it.",
    reversed: "The swords are still on the wall, but the body is beginning to believe in morning. A secret spoken, a panic that peaks and falls, the first good night. Nine of Swords reversed is not instant peace. It is the turn. Keep going toward the window."
  },
  {
    id: "ten-swords",
    name: "Ten of Swords",
    arcana: "Minor Arcana · Swords",
    number: "Ten",
    image: "cards/swords-10.jpg",
    keywords: { upright: "rock bottom, a clean ending, the worst has arrived", reversed: "the worst passing, recovery, refusing to die on this hill" },
    upright: "Ten swords, a dawn anyway. This is an ending so complete it cannot be bargained with — betrayal, burnout, a story that is over. It is also the last of the swords. Nothing more can be done to this back. Let it be over. The sun is already up on the other side of the figure.",
    reversed: "You are pulling through. A disaster averted, a recovery underway, or a refusal to keep playing the slain. Do not pick the swords back up for old times’ sake. Ten of Swords reversed is survival. Treat it as sacred."
  },
  {
    id: "page-swords",
    name: "Page of Swords",
    arcana: "Minor Arcana · Swords",
    number: "Page",
    image: "cards/swords-11-page.jpg",
    keywords: { upright: "curiosity, news, a keen mind", reversed: "gossip, all talk, nervous watching" },
    upright: "Wind in the hair, sword up, eyes on the sky. A message, a student of ideas, a mind that wants to know. Stay curious. Ask the sharp question. This Page is vigilance in a good cause — truth, study, and the first draft of a brave thought.",
    reversed: "The watching turns to spying, the questions to gossip. Defensiveness, scattered research, or words that cut before they land. Page of Swords reversed needs a better use for the blade: learn, then speak. Not the other way around."
  },
  {
    id: "knight-swords",
    name: "Knight of Swords",
    arcana: "Minor Arcana · Swords",
    number: "Knight",
    image: "cards/swords-12-knight.jpg",
    keywords: { upright: "swift intellect, charge toward truth, urgency", reversed: "brutality, haste, argument as a sport" },
    upright: "Full gallop, sword forward, clouds flying. A fast mind, a sudden departure, a debate you can win. Use the speed for something that deserves it. Clarity loves courage. Just remember that a charge is not a conversation.",
    reversed: "The horse has no bridle. Cutting speech, rushing a decision, fighting because you can. Knight of Swords reversed asks you to sheathe the point until you know what you are actually defending. Speed without aim is wreckage."
  },
  {
    id: "queen-swords",
    name: "Queen of Swords",
    arcana: "Minor Arcana · Swords",
    number: "Queen",
    image: "cards/swords-13-queen.jpg",
    keywords: { upright: "clear mind, honest speech, independent wisdom", reversed: "coldness, bitterness, weaponized intellect" },
    upright: "One hand extended, one holding the sword, clouds behind a still face. She has been through weather and kept her mind. Truth without cruelty, boundaries without drama, a counselor who will not lie to you. Be that clear. You can be kind and still refuse the fog.",
    reversed: "The sword is all edge. Isolation, harsh judgment, or using intelligence to stay unhurt and untouched. Queen of Swords reversed still has wisdom — it needs warmth in the other hand. Tell the truth. Leave a way back to the human."
  },
  {
    id: "king-swords",
    name: "King of Swords",
    arcana: "Minor Arcana · Swords",
    number: "King",
    image: "cards/swords-14-king.jpg",
    keywords: { upright: "authority of mind, ethics, just decision", reversed: "tyranny of reason, cruelty, misuse of power" },
    upright: "The king of air on a stone seat, sword vertical. Law, strategy, ethical authority, a decision made on principle. Think it through. Then rule. This is the mind in service of fairness — a judge, a writer, a leader who will not twist the facts.",
    reversed: "The law becomes a weapon, or the intellect a wall. Manipulation, cold verdicts, a clever argument that is not just. King of Swords reversed asks you to put ethics back on the throne. Being right is not the same as being fair."
  },
  {
    id: "ace-pentacles",
    name: "Ace of Pentacles",
    arcana: "Minor Arcana · Pentacles",
    number: "Ace",
    image: "cards/pentacles-01-ace.jpg",
    keywords: { upright: "seed of prosperity, new work, a real opportunity", reversed: "missed chance, shaky start, scarcity mind" },
    upright: "A coin in a cloud over a garden gate. A tangible beginning: money, work, health, a house, a craft. This is luck you can plant. Take the offer into the body of the world — a budget, a seed, a first day’s labor. The path through the arch is real.",
    reversed: "The coin slips, or you will not put your hand out. A job that looks better than it is, a scarcity story, a delay in material plans. Ace of Pentacles reversed says wait for the solid seed — then plant it, don’t just wish for the garden."
  },
  {
    id: "two-pentacles",
    name: "Two of Pentacles",
    arcana: "Minor Arcana · Pentacles",
    number: "Two",
    image: "cards/pentacles-02.jpg",
    keywords: { upright: "juggling, adaptability, balancing resources", reversed: "dropped balls, overcommitment, money stress" },
    upright: "The infinity loop, two coins, ships on a moving sea. Life is a juggle: time, money, roles. You can do this if you stay light on your feet. Prioritize the dance, not the performance of having it all handled. Flexibility is the skill.",
    reversed: "A coin hits the dock. Too many jobs, a budget that will not balance, the joke of “I’m fine” wearing thin. Put one pentacle down. Two of Pentacles reversed is a plea for a simpler rhythm."
  },
  {
    id: "three-pentacles",
    name: "Three of Pentacles",
    arcana: "Minor Arcana · Pentacles",
    number: "Three",
    image: "cards/pentacles-03.jpg",
    keywords: { upright: "craft, collaboration, skilled work", reversed: "ego on the job, poor teamwork, unvalued skill" },
    upright: "Mason, monk, and architect under the arch. Good work done with others: apprenticeship, a project that needs more than one kind of mind. Take pride in the craft. Let yourself be taught, and let your skill be seen. Building together is the point.",
    reversed: "The cathedral stalls. Working at cross purposes, a talent ignored, or refusing to be a beginner. Three of Pentacles reversed asks you to come back to the work, not the status. Collaboration needs humility and a shared plan."
  },
  {
    id: "four-pentacles",
    name: "Four of Pentacles",
    arcana: "Minor Arcana · Pentacles",
    number: "Four",
    image: "cards/pentacles-04.jpg",
    keywords: { upright: "conservation, control, holding on", reversed: "release, generosity, fear of loss loosening" },
    upright: "Crown, chest, and both feet on coins. Security is real — and so is the clench. Saving, boundaries around money, a need to feel in control of the material world. Hold what you must. Check whether you are holding so tight that nothing (and no one) can move.",
    reversed: "The grip eases, or it shatters. Spending, sharing, or a crisis that forces the fists open. Four of Pentacles reversed can be healthy generosity or reckless loss. Know which. Security that cannot breathe is not security."
  },
  {
    id: "five-pentacles",
    name: "Five of Pentacles",
    arcana: "Minor Arcana · Pentacles",
    number: "Five",
    image: "cards/pentacles-05.jpg",
    keywords: { upright: "hardship, exclusion, winter of resources", reversed: "help arriving, recovery, the window noticed" },
    upright: "Snow, crutches, a lit window behind. Material or bodily hardship, and the feeling of being left outside the warm place. Ask for help. Look up. The church window is in the picture for a reason. You are not as alone as the cold suggests.",
    reversed: "Someone opens a door, or you finally knock. Recovery from lack, finding community, the end of a lean season. Five of Pentacles reversed is not instant wealth. It is the moment the isolation breaks. Take the warmth."
  },
  {
    id: "six-pentacles",
    name: "Six of Pentacles",
    arcana: "Minor Arcana · Pentacles",
    number: "Six",
    image: "cards/pentacles-06.jpg",
    keywords: { upright: "giving and receiving, fairness, support", reversed: "strings attached, debt, uneven charity" },
    upright: "Scales in one hand, coins in the other. Right relationship with resources: generosity, a grant, a fair wage, knowing when you are the giver and when you are the one who should receive. Dignity on both sides of the gift. Share without humiliating. Take without shame.",
    reversed: "The scales are a costume. Power in the gift, debt, or charity that keeps people small. Six of Pentacles reversed asks who really benefits. Restore fairness. A gift with a leash is not a gift."
  },
  {
    id: "seven-pentacles",
    name: "Seven of Pentacles",
    arcana: "Minor Arcana · Pentacles",
    number: "Seven",
    image: "cards/pentacles-07.jpg",
    keywords: { upright: "assessment, patience, long investment", reversed: "impatience, poor harvest, questioning the work" },
    upright: "A pause in the vineyard. You have put in the labor. Now you look at what is growing and decide whether to wait, prune, or plant differently. Long-term work, delayed reward, the wisdom of not yanking the plant. Trust time — and stay honest about the yield.",
    reversed: "The harvest is thin, or you will not wait for it. Frustration with slow results, a project that will not pay, sunk-cost stubbornness. Seven of Pentacles reversed is a review. Keep watering only what is actually alive."
  },
  {
    id: "eight-pentacles",
    name: "Eight of Pentacles",
    arcana: "Minor Arcana · Pentacles",
    number: "Eight",
    image: "cards/pentacles-08.jpg",
    keywords: { upright: "diligence, skill-building, devoted craft", reversed: "perfectionism, boredom, careless work" },
    upright: "Coin after coin, the same careful hand. This is apprenticeship and mastery in the making: practice, study, the dignity of showing up to the bench. Excellence is a pile of ordinary days. Keep at the work. It is turning you into someone who can do this.",
    reversed: "The bench is a grind, or the work is sloppy. Burnout, busywork, or talent without discipline. Eight of Pentacles reversed asks whether you are honing a craft or hiding in tasks. Quality over the appearance of being busy."
  },
  {
    id: "nine-pentacles",
    name: "Nine of Pentacles",
    arcana: "Minor Arcana · Pentacles",
    number: "Nine",
    image: "cards/pentacles-09.jpg",
    keywords: { upright: "self-sufficiency, refined comfort, earned beauty", reversed: "isolation in success, overwork, hollow luxury" },
    upright: "A garden you grew, a hooded bird, a life that fits. Independence, taste, and the pleasure of having enough through your own labor. Enjoy the grape. You do not need permission to live well. Solitude here is chosen, and rich.",
    reversed: "The garden is a display, or a cage. Working so much you cannot taste the fruit, status anxiety, or success that leaves you lonely. Nine of Pentacles reversed wants a wealth that includes a living body and maybe another person in the vines."
  },
  {
    id: "ten-pentacles",
    name: "Ten of Pentacles",
    arcana: "Minor Arcana · Pentacles",
    number: "Ten",
    image: "cards/pentacles-10.jpg",
    keywords: { upright: "legacy, family wealth, lasting foundation", reversed: "family money trouble, broken legacy, conflict over inheritance" },
    upright: "Generations under an arch of pentacles. This is long wealth: family, home, tradition, a business that outlasts you. Security you can share. Think beyond this season. What you build now can shelter people you have not even met.",
    reversed: "The house is divided. Inheritance fights, a family system that costs too much, or success that does not reach the people it should. Ten of Pentacles reversed asks what kind of legacy you are actually writing — not the coat of arms, the daily truth."
  },
  {
    id: "page-pentacles",
    name: "Page of Pentacles",
    arcana: "Minor Arcana · Pentacles",
    number: "Page",
    image: "cards/pentacles-11-page.jpg",
    keywords: { upright: "student of the real, new skill, practical news", reversed: "procrastination, poor study, a chance not taken" },
    upright: "A young figure studies a coin as if it were a moon. News of work or money, a beginner’s devotion, the first serious interest in a craft. Stay teachable. The Page’s magic is attention. Put the vision in a notebook, then in a practice.",
    reversed: "The coin is a daydream. Unfinished courses, laziness dressed as waiting, or a practical opportunity ignored. Page of Pentacles reversed needs one small, physical start. Talent does not count until it shows up."
  },
  {
    id: "knight-pentacles",
    name: "Knight of Pentacles",
    arcana: "Minor Arcana · Pentacles",
    number: "Knight",
    image: "cards/pentacles-12-knight.jpg",
    keywords: { upright: "steady labor, reliability, slow progress", reversed: "stuckness, stubbornness, work without life" },
    upright: "The horse does not gallop. That is the point. Method, duty, and the unglamorous courage of continuing. This Knight finishes. Trust the slow road if the work is real. Reliability is a love language. Keep the field.",
    reversed: "Stuck in the furrow. Perfectionism, boredom, or motion so slow it is a stall. Knight of Pentacles reversed still values the work — it needs a pulse. Change the routine before the earth goes hard."
  },
  {
    id: "queen-pentacles",
    name: "Queen of Pentacles",
    arcana: "Minor Arcana · Pentacles",
    number: "Queen",
    image: "cards/pentacles-13-queen.jpg",
    keywords: { upright: "nurture through the material, practical care, abundance", reversed: "self-neglect, cluttered care, work-life out of tune" },
    upright: "A queen in a garden, coin in her lap, rabbit at the edge. She makes a life that can hold people: food, money sense, a healing home, the body as an ally. Prosperity with warmth. Tend the physical world as a form of love — including your own.",
    reversed: "Everyone is fed but the queen. Smothering care, financial worry, or a home that runs you. Queen of Pentacles reversed needs her own garden plot. Restore the body and the budget. Care that erases you is not care."
  },
  {
    id: "king-pentacles",
    name: "King of Pentacles",
    arcana: "Minor Arcana · Pentacles",
    number: "King",
    image: "cards/pentacles-14-king.jpg",
    keywords: { upright: "material mastery, generous wealth, steady empire", reversed: "greed, stagnation, success as a trap" },
    upright: "Grapes, armor, a coin held like a world. This is earned plenty and the wisdom of how to keep it growing. Business, land, the reliable provider, a king who wants his people fed. Build something that lasts. Be generous from surplus, not from performance.",
    reversed: "The empire is a fist. Greed, status addiction, or a conservatism so thick nothing new can grow. King of Pentacles reversed still knows how to make a world — he has forgotten why. Loosen the gold. Wealth that cannot move becomes a tomb."
  }
];
