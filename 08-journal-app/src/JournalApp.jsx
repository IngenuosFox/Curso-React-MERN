import { AppRouter } from "./router/AppRouter"
import { AppThemen } from "./theme"

export const JournalApp = () => {
	return (
		<>
			<AppThemen>
				<AppRouter />
			</AppThemen>
		</>
	)
}
