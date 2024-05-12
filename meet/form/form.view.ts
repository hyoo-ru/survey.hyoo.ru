namespace $.$$ {
	export class $hyoo_survey_meet_form extends $.$hyoo_survey_meet_form {

		opinion_my( next?: string ) {
			return this.meet().opinion_my()?.Descr( next )?.text( next ) ?? ''
		}
		
		@ $mol_mem
		is_my() {
			return this.meet().Owner()?.val() === this.meet().land().auth().lord()
		}
		
		@ $mol_mem
		body() {
			return [
				this.Bid(),
				this.Opinion_my(),
				... this.is_my() ? [ this.Opinions() ] : [],
			]
		}

		@ $mol_mem
		opinions() {
			return this.meet().Opinions()?.remote()?.keys().map( key => this.Opinion( key ) ) ?? []
		}

		opinion( key: string ) {
			return this.meet().Opinions()?.remote()?.key( key )?.remote()?.Descr()?.text() ?? ''
		}
		
	}
}
