// import Express from "express";
import { getShowStopper, createShowStopper } from "../controllers/ShowStopper.js";
import { getBronxBattleground, createBronxBattleground } from "../controllers/BronxBattleground.js";
import { getPraanant, createPraanant } from "../controllers/Praanant.js";
import { getRhymeriot, createRhymeriot } from "../controllers/Rhymeriot.js";
import { getStellarsignoff, createStellarsignoff } from "../controllers/Stellarsign-off.js";
import { getadmads, createadmads } from "../controllers/admads.js";
import { getmun, createmun } from "../controllers/mun.js";
import { getGroovegenesis, createGroovegenesis } from "../controllers/Groovegenesis.js";
import { getBahumukhi, createBahumukhi } from "../controllers/Bahumukhi.js";
import { getAndhakaar, createAndhakaar } from "../controllers/Andhakaar.js";
import { getroadtoredcarpet, createroadtoredcarpet } from "../controllers/roadtoredcarpet.js";
import { getrythmrumble, createrythmrumble } from "../controllers/rythmrumble.js";
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from "mongoose";

const app = Express();
const router = Express.Router();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/EventRegistration');
  console.log('db connected');
}

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//For Showstopper
// router.get('/showstopper', getShowStopper);
router.post('/showstopper', createShowStopper);

//For Bronx Battleground
// router.get('/bronxbattleground', getBronxBattleground);
router.post('/bronxbattleground', createBronxBattleground);


//For Praanant
// router.get('/praanant', getPraanant);
router.post('/praanant', createPraanant);

//For Rhyme Riot
// router.get('/rhymeriot', getRhymeriot);
router.post('/rhymeriot', createRhymeriot);

//For Stellar Sing-Off
// router.get('/stellarsingoff', getStellarsignoff);
router.post('/stellarsingoff', createStellarsignoff);

//For Ad Mads
// router.get('/admads', getadmads);
router.post('/admads', createadmads);

//For Model United Nations (MUN)
// router.get('/mun', getmun);
router.post('/mun', createmun);

//For Groove Genesis
// router.get('/groovegenesis', getGroovegenesis);
router.post('/groovegenesis', createGroovegenesis);

//For Bahumukhi
// router.get('/bahumukhi', getBahumukhi);
router.post('/bahumukhi', createBahumukhi);

//For Andhakaar
// router.get('/andhakaar', getAndhakaar);
router.post('/andhakaar', createAndhakaar);

//For Road to Red Carpet
// router.get('/roadtoredcarpet', getroadtoredcarpet);
router.post('/roadtoredcarpet', createroadtoredcarpet);

//For Rythm Rumble
// router.get('/rythmrumble', getrythmrumble);
router.post('/rythmrumble', createrythmrumble);



// Use a base URL for the router
app.use('/', router);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
