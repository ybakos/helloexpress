/*
 * Pets Model
 */
 
 var db = {};
 
 var Pets = module.exports = exports = function Pets(petStoreName, allowsBadgers){
     this.PetStoreName = petStoreName;
     this.AllowsBadgers = allowsBadgers;
     prepopulateDatabase();
 }
 
 Pets.prototype.save = function(pet, callback){
     db[pet.petName] = pet;
     callback(null, pet);
 }
 
 Pets.prototype.get = function(petName, callback){
     callback(null, db[petName]);
 }
 
 Pets.prototype.list = function(count, callback){
     var arr = Object.keys(db).reduce(function(arr, id){
        arr.push(db[id]);
        return arr;
    }, []);
    callback(null, arr.reverse());
 }
 
 function prepopulateDatabase(){
     db['TheProfessor'] = {
                petType:'cat',
                petName:'TheProfessor',
                petAge:'undying',
                petPrice:100 
            };
            
     db['CaptainBananas'] = {
                petType:'screeching monkey',
                petName:'CaptainBananas',
                petAge:'13 months',
                petPrice:10000
            }; 
            
            
        db['KateHudson'] = {
                petType:'honey badger',
                petName:'KateHudson',
                petAge:"33 years (8 seasons of Grey's Anatomy)",
                petPrice:-1,
                isBadger:true
            };
 }