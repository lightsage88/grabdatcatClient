import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import Image from './image';

export default class SearchForm extends React.Component {
  render() {
    return (
      <Form>
        <h5>SEEK DAT CAT</h5>
        <FormGroup>
          <Label for="breedSelect">BREED</Label>
          <Input type="select" name="breedSelect" id="breedSelect">
            <option value=''>--ANY--</option>
          <option value='Abyssinian'>Abysinnian</option>
          <option value='American Curl'>American Curl</option>
          <option value='American Shorthair'>American Shorthair</option>
          <option value='American Wirehair'>American Wirehair</option>
          <option value='Applehead Siamese'>Applehead Siamese</option>
          <option value='Balinese'>Balinese</option>
          <option value='Bengal'>Bengal</option>
          <option value='Birman'>Birman</option>
          <option value='Bobtail'>Bobtail</option>
          <option value='Bombay'>Bombay</option>
          <option value='British Shorthair'>British Shorthair</option>
          <option value='Burmese'>Burmese</option>
          <option value='Burmilla'>Burmilla</option>
          <option value='Calico'>Calico</option>
          <option value='Canadian Hairless'>Canadian Hairless</option>
          <option value='Chartreux'>Chartreux</option>
          <option value='Chausie'>Chausie</option>
          <option value='Chincilla'>Chincilla</option>
          <option value='Cornish Rex'>Cornish Rex</option>
          <option value='Cymric'>Cymric</option>
          <option value='Devon Rex'>Devon Rex</option>
          <option value='Dilute Calico'>Dilute Calico</option>
          <option value='Dilute Tortoiseshell'>Dilute Tortoiseshell</option>
          <option value='Domestic Long Hair'>Domestic Long Hair</option>
          <option value='Domestic Medium Hair'>Domestic Medium Hair</option>
          <option value='Domestic Short Hair'>Domestic Short Hair</option>
          <option value='Egyptian Mau'>Egyptian Mau</option>
          <option value='Exotic Shorthair'>Exotic Shorthair</option>
          <option value='Extra-Toes Cat'>Extra-Toes Cat</option>
          <option value='Havana'>Havana</option>
          <option value='Himalayan'>Himalayan</option>
          <option value='Japanese Bobtail'>Japanese Bobtail</option>
          <option value='Javanese'>Javanese</option>
          <option value='Korat'>Korat</option>
          <option value='LaPerm'>LaPerm</option>
          <option value='Maine Coon'>Maine Coon</option>
          <option value='Manx'>Manx</option>          
          <option value='Munchkin'>Munchkin</option>
          <option value='Nebelung'>Nebelung</option>
          <option value='Norwegian Forest Cat'>Norwegian Forest Cat</option>
          <option value='Ocicat'>Ocicat</option>
          <option value='Oriental Long Hair'>Oriental Long Hair</option>
          <option value='Oriental Short Hair'>Oriental Short Hair</option>
          <option value='Oriental Tabby'>Oriental Tabby</option>
          <option value='Persian'>Persian</option>
          <option value='Pixie-Bob'>Pixie-Bob</option>
          <option value='Ragamuffin'>Ragamuffin</option>
          <option value='Ragdoll'>Ragdoll</option>
          <option value='Russian Blue'>Russian Blue</option>
          <option value='Scottish Fold'>Scottish Fold</option>
          <option value='Selkirk Rex'>Selkirk Rex</option>
          <option value='Siamese'>Siamese</option>
          <option value='Serbian'>Serbian</option>
          <option value='Silver'>Silver</option>
          <option value='Singapura'>Singapura</option>
          <option value='Snowshoe'>Snowshoe</option>
          <option value='Somali'>Somali</option>
          <option value='Sphynx/Hairless'>Sphynx/Hairless</option>
          <option value='Tabby'>Tabby</option>
          <option value='Tiger'>Tiger</option>
          <option value='Tonkinese'>Tonkinese</option>
          <option value='Torbie'>Torbie</option>
          <option value='Tortoiseshell'>Tortoiseshell</option>
          <option value='Turkish Angora'>Turkish Angora</option>
          <option value='Turkish Van'>Turkish Van</option>
          <option value='Tuxedo'>Tuxedo</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="colorSelect">COLOR</Label>
          <Input type="select" name="colorSelect" id="colorSelect">
            <option value=''>--ANY--</option>
          <option value='Black'>Black</option>
          <option value='Black & White/Tuxedo'>Black & White/Tuxedo</option>
          <option value='Blue Cream'>Blue Cream</option>
          <option value='Blue Point'>Blue Point</option>
          <option value='Brown/Chocolate'>Brown/Chocolate</option>
          <option value='Buff & White'>Buff & White</option>
          <option value='Buff/Tan/Fawn'>Buff/Tan/Fawn</option>
          <option value='Calico'>Calico</option>
          <option value='Chocolate Point'>Chocolate Point</option>
          <option value='Cream/Ivory'>Cream/Ivory</option>
          <option value='Cream Point'>Cream Point</option>
          <option value='Dilute Calico'>Dilute Calico</option>
          <option value='Dilute Tortoiseshell'>Dilute Tortoiseshell</option>
          <option value='Flame Point'>Flame Point</option>
          <option value='Gray & White'>Gray &amp; White</option>
          <option value='Gray/Blue/Silver'>Gray/Blue/Silver</option>
          <option value='Lilac Point'>Lilac Point</option>          
          <option value='Orange & White'>Orange &amp; White</option>
          <option value='Orange/Red'>Orange/Red</option>
          <option value='Seal Point'>Seal Point</option>
          <option value='Smoke'>Smoke</option>
          <option value='Tabby (Brown/Chocolate)'>Tabby (Brown/Chocolate)</option>
          <option value='Tabby (Buff/Tan/Fawn)'>Tabby (Buff/Tan/Fawn)</option>
          <option value='Tabby (Gray/Blue/Silver)'>Tabby (Gray/Blue/Silver)</option>
          <option value='Tabby (Orange/Red)'>Tabby (Orange/Red)</option>
          <option value='Tabby (Tiger Striped)'>Tabby (Tiger Striped)</option>
          <option value='Torbie'>Torbie</option>
          <option value='Tortoiseshell'>Tortoiseshell</option>
          <option value='White'>White</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="genderSelect">GENDER</Label>
          <Input type="select" name="genderSelect" id="genderSelect">
            <option value=''>--ANY--</option>
            <option value='F'>F</option>
            <option value='M'>M</option>         
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="ageSelect">AGE</Label>
          <Input type="select" name="ageSelect" id="ageSelect">
            <option value=''>--ANY--</option>
            <option value='BABY'>BABY</option>
            <option value='YOUNG'>YOUNG</option>         
            <option value='ADULT'>ADULT</option>         
            <option value='SENIOR'>SENIOR</option>         
          </Input>
        </FormGroup>


        <FormGroup>
          <Label for="zipCode">ZIPCODE</Label>
          <Input type="text" name="zipCode" id="zipCode" />
        </FormGroup>
        <FormGroup>
          <Label for='distance'>DISTANCE</Label>
          <Input type='select' name='distance' id='distance'>
            <option value=''>TO &#x221e; & BEYOND</option>
            <option value='10'>10 MILES</option>
            <option value='25'>25 MILES</option>
            <option value='50'>50 MILES</option>
            <option value='100'>100 MILES</option>
          </Input>
        </FormGroup>
        <Button>SEEK!</Button>
      </Form>
    );
  }
}