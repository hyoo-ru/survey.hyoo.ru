namespace $ {
	
	export class $hyoo_survey_meet extends $hyoo_crus_entity.with({
		Owner: $hyoo_crus_atom_ref_to( ()=> $hyoo_survey_person ),
		Opinions: $hyoo_crus_dict_to( $hyoo_crus_atom_ref_to( ()=> $hyoo_survey_meet_opinion ) ),
	}) {

		@ $mol_mem
		opinion_my() {
			const key = this.land().auth().peer()
			return this.Opinions( true )?.key( key, true )?.remote_ensure( $hyoo_crus_rank_public ) ?? null
		}

	}
	
	export class $hyoo_survey_meet_opinion extends $hyoo_crus_entity.with({
		Pleasant: $hyoo_crus_atom_str,
		Improvement: $hyoo_crus_atom_str,
		Continue: $hyoo_crus_atom_bool,
		Request: $hyoo_crus_atom_str,
	}) {}

}
