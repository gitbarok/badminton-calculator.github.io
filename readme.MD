# Urunan Badminton Calculator
This app is for calculating price that people must pay after playing badminton.

This application serves the purpose of calculating the cost individuals need to pay after engaging in a badminton game.

The functionality of this app is limited to the double game setting, specifically in a 2 vs. 2 scenario based on my use case. You are welcome to suggest improvements for this feature.

In a badminton game setting where four players participate, more than two balls are typically used. To determine the individual cost per ball, the following formula is applied: `ball_price_perindividual = (price_per_ball / total_players_in_1_game) * total_balls_in_1_game`.

In practical terms, if one game involves four balls, each priced at 16000, the calculation becomes `ball_price_perindividual = (16000/4) * 4)`, resulting in a `total_ball_price_perindividual of 16000`. This total is then added to the court price, calculated as `price_court_individual = total_price_court / number_of_players`.

The final amount that each individual must pay is determined by the sum of the court price and the individual ball cost, expressed as `individual_must_pay = price_court_individual + ball_price_perindividual`.

ps. i know the code for this app is tr#sh, im trying my best hahahahah