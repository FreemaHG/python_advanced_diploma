from flask import request
from flask_restful import Resource
from marshmallow import ValidationError
from loguru import logger

from ..utils.token import token_required
from ..services.tweets import TweetsService
from ..models.users import User
from ..schemas.tweets import TweetResponseSchema, TweetInSchema
from ..schemas.base_response import ErrorResponseSchema


class TweetsList(Resource):

    @token_required
    def get(self, current_user: User):
        """
        Вывод твитов для текущего пользователя (твиты подписчиков)
        """
        logger.debug(f'Вывод всех твитов для пользователя: {current_user.name}')
        ...

    @token_required
    def post(self, current_user: User):
        """
        Добавление твита
        """
        logger.debug('Добавление твита')
        data = request.json
        data['user_id'] = current_user.id

        try:
            TweetInSchema().load({'tweet_data': data['tweet_data']})  # Валидация входных данных
            tweet = TweetsService.create_tweet(data=data)

            return TweetResponseSchema().dump({'tweet_id': tweet.id}), 201

        except ValidationError as exc:
            logger.error(f'Невалидные данные: {exc.messages}')
            error_message = exc.messages['tweet_data'][0]

            return ErrorResponseSchema().dump({'error_type': 400, 'error_message': error_message}), 400




