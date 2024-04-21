namespace $.$$ {
	export class $hyoo_survey_meet_form extends $.$hyoo_survey_meet_form {

		title( next?: string ) {
			return this.meet().Title( next )?.val( next ) ?? ''
		}
		
		pleasant( next?: string ) {
			return this.meet().opinion_my()?.Pleasant( next )?.val( next ) ?? ''
		}
		
		improvement( next?: string ) {
			return this.meet().opinion_my()?.Improvement( next )?.val( next ) ?? ''
		}
		
		request( next?: string ) {
			return this.meet().opinion_my()?.Request( next )?.val( next ) ?? ''
		}

		@ $mol_mem
		opinions() {
			if( this.meet().Owner()?.val() !== this.meet().land().auth().lord() ) return []
			return this.meet().Opinions()?.keys().map( key => this.Opinion( key ) ) ?? []
		}

		opinion( key: string ) {
			const opinion = this.meet().Opinions()?.key( key )?.remote()
			if( !opinion ) return ''
			return ( opinion.Pleasant()?.val() ?? '' ) + '\n'
				+ ( opinion.Improvement()?.val() ?? '' ) + '\n'
				+ ( opinion.Request()?.val() ?? '' ) + '\n'
		}
		
	}
}
