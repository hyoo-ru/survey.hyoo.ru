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
		is_my() {
			return this.meet().Owner()?.val() === this.meet().land().auth().lord()
		}
		
		@ $mol_mem
		body() {
			return [
				this.Form(),
				... this.is_my() ? [ this.Opinions() ] : [],
			]
		}

		@ $mol_mem
		opinions() {
			return this.meet().Opinions()?.keys().map( key => this.Opinion( key ) ) ?? []
		}

		opinion( key: string ) {
			return this.meet().Opinions()?.key( key )?.remote()?.brief() ?? ''
		}
		
	}
}
