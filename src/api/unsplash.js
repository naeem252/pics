import axios from 'axios';

export default axios.create({
	baseURI:'https://api.unsplash.com',
	headers:{
				Authorization: 'Client-ID c650d370f4c087c4eeb7cfe9c1632bd717caa06cd02d4074c46439f194dc9327'
			}
});