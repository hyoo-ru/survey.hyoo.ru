namespace $ {
	
	export class $hyoo_survey_meet extends $hyoo_crus_entity.with({
		Owner: $hyoo_crus_atom_ref_to( ()=> $hyoo_survey_person ),
		Opinions: $hyoo_crus_atom_ref_to( ()=> $hyoo_survey_meet_opinions ),
	}) {

		@ $mol_mem
		opinion_my() {
			
			const my_auth = this.land().auth()
			const owner_key = this.Owner()?.remote()?.land().key()
			if( !owner_key ) return null
			
			const opinions = this.Opinions(null)?.remote_ensure( $hyoo_crus_rank_lobby )
			
			const opinion = opinions?.key( my_auth.peer(), null )?.remote_ensure({
				[ owner_key.toString() ]: $hyoo_crus_rank.get,
				[ my_auth.public().toString() ]: $hyoo_crus_rank.law,
			}) ?? null
			
			return opinion
		}

	}
	
	export class $hyoo_survey_meet_opinions extends $hyoo_crus_dict_to(
		$hyoo_crus_atom_ref_to( ()=> $hyoo_survey_meet_opinion )
	) {}
	
	export class $hyoo_survey_meet_opinion extends $hyoo_crus_dict.with({
		Descr: $hyoo_crus_text,
	}) {}

}
