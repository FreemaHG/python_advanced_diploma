import datetime

from sqlalchemy import event

from ..database import db


# Вспомогательная таблица для отслеживания подписок пользователей между собой
followers = db.Table(
    'followers',
    db.Column('user_id', db.ForeignKey('user.id'), primary_key=True),
    db.Column('following_user_id', db.ForeignKey('user.id'), primary_key=True)
)


class User(db.Model):
    """
    Модель для хранения данных о пользователях
    """
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(60), unique=True, nullable=False)
    api_key = db.Column(db.String(60))
    password = db.Column(db.String)
    avatar = db.Column(db.String)
    created_at = db.Column(db.String, default=datetime.datetime.now())

    # Многие ко многим (подписки пользователей друг на друга)
    followers = db.relationship(
        'User',
        secondary=followers,
        backref=db.backref('following', lazy='selectin'),
        primaryjoin=id == followers.c.user_id,
        secondaryjoin=id == followers.c.following_user_id,
    )


# FIXME Удалить или использовать...
@event.listens_for(User, 'after_delete')
def event_after_delete(mapper, connection, target):
    # Здесь будет очень важная бизнес логика
    # Или нет. На самом деле, старайтесь использовать сигналы только
    # тогда, когда других, более правильных вариантов не осталось.
    pass
