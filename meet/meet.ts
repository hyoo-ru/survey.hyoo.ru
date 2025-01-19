namespace $ {
	
	export class $hyoo_survey_meet extends $hyoo_crus_entity.with({
		Descr: $hyoo_crus_text,
		Owner: $hyoo_crus_atom_ref_to( ()=> $hyoo_survey_person ),
		Opinions: $hyoo_crus_atom_ref_to( ()=> $hyoo_survey_meet_opinions ),
	}) {

		@ $mol_mem
		opinion_my() {
			
			const my_auth = this.land().auth()
			const owner_key = this.Owner()?.remote()?.land().key()
			if( !owner_key ) return null
			
			const opinions = this.Opinions(null)?.ensure({ '': $hyoo_crus_rank_post( 'just' ) })
			
			const opinion = opinions?.ensure_of( my_auth.peer(), {
				[ owner_key.toString() ]: $hyoo_crus_rank_read,
				[ my_auth.public().toString() ]: $hyoo_crus_rank_rule,
			} ) ?? null
			
			return opinion
		}
		
		@ $mol_mem
		responder_refs() {
			return this.Opinions()?.remote()?.author_peers() ?? []
		}
		
		@ $mol_mem_key
		opinion( responder: string ) {
			const options = this.Opinions()?.remote()
			return options?.remote_of( responder ) ?? null
		}

	}
	
	export class $hyoo_survey_meet_opinions extends $hyoo_crus_atom_ref_to( ()=> $hyoo_survey_meet_opinion ) {}
	
	export class $hyoo_survey_meet_opinion extends $hyoo_crus_dict.with({
		Descr: $hyoo_crus_text,
	}) {}

}
