namespace $.$$ {
	export class $hyoo_survey_meet_form extends $.$hyoo_survey_meet_form {

		title( next?: string ) {
			return this.meet().Title( next )?.val( next ) ?? ''
		}
		
		descr( next?: string ) {
			return this.meet().Descr( next )?.text( next ) ?? ''
		}
		
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
				... ( this.is_my() || this.descr() ) ? [ this.Descr() ] : [],
				this.Bid(),
				this.Opinion_my(),
				this.Hints(),
				... this.is_my() ? [ this.Opinions() ] : [],
			]
		}

		@ $mol_mem
		opinions() {
			return this.meet().responder_refs().map( person => this.Opinion( person ) ) ?? []
		}

		opinion( responder: string ) {
			return this.meet().opinion( responder )?.Descr()?.text() ?? '...'
		}
		
	}
}
