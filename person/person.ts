namespace $ {
	export class $hyoo_survey_person extends $hyoo_crus_entity.with({
		Meets: $hyoo_crus_list_ref_to( ()=> $hyoo_survey_meet ),
	}) {
		
		@ $mol_action
		meet_make() {
			return this.Meets(true)?.remote_make( $hyoo_crus_rank_orgy )
		}

	}
}
