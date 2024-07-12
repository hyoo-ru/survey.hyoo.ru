namespace $.$$ {
	export class $hyoo_survey_app extends $.$hyoo_survey_app {
		
		@ $mol_mem
		meet_id( next?: $hyoo_crus_ref ) {
			const id = this.$.$mol_state_arg.value( 'meet', next?.description )
			if( !id ) return null
			return $hyoo_crus_ref( id )
		}

		@ $mol_mem
		profile() {
			return this.$.$hyoo_crus_realm.home().hall_by( $hyoo_survey_person, {} )
		}

		meet_add() {
			const meet = this.profile()!.meet_make()!
			this.meet_id( meet.ref() )
		}

		@ $mol_mem
		spread_ids() {
			return this.profile()?.Meets()?.remote_list().map( meet => meet.ref().description! ) ?? []
		}

		@ $mol_mem_key
		meet( id: string ) {
			return this.$.$hyoo_crus_realm.Node( $hyoo_crus_ref( id ), $hyoo_survey_meet )
		}
		
		@ $mol_mem_key
		meet_visible( id: string, next?: boolean ) {
			return this.profile()?.Meets( next )?.has( $hyoo_crus_ref( id ), next ) ?? false
		}
		
	}
}
