namespace $ {
	
	export class $hyoo_survey_meet extends $hyoo_crus_entity.with({
		Owner: $hyoo_crus_atom_ref_to( ()=> $hyoo_survey_person ),
		Opinions: $hyoo_crus_dict_to( $hyoo_crus_atom_ref_to( ()=> $hyoo_survey_meet_opinion ) ),
	}) {

		@ $mol_mem
		opinion_my() {
			
			const auth_my = this.land().auth()
			const auth_owner = this.Owner()?.remote()?.land().key()
			if( !auth_owner ) return null
			
			const opinion = this.Opinions( true )?.key( auth_my.peer(), true )?.remote_ensure({
				[ auth_owner.toString() ]: auth_my.lord() === auth_owner.lord()
					? $hyoo_crus_rank.law
					: $hyoo_crus_rank.get,
			}) ?? null
			
			return opinion
		}

	}
	
	export class $hyoo_survey_meet_opinion extends $hyoo_crus_entity.with({
		Pleasant: $hyoo_crus_atom_str,
		Improvement: $hyoo_crus_atom_str,
		Continue: $hyoo_crus_atom_bool,
		Request: $hyoo_crus_atom_str,
	}) {
		
		@ $mol_mem
		brief() {
			const pleasant = this.Pleasant()?.val() ?? ''
			const improvement = this.Improvement()?.val() ?? ''
			const request = this.Request()?.val() ?? ''
			return `💗 ${pleasant}\n📌 ${improvement}\n🙏 ${request}`
		}
		
	}

}
