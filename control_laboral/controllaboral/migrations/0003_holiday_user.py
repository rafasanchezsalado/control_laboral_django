# Generated by Django 3.1.1 on 2020-10-10 15:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("controllaboral", "0002_auto_20200920_2259"),
    ]

    operations = [
        migrations.CreateModel(
            name="Holiday",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=128)),
                ("date", models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name="User",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("username", models.CharField(max_length=64)),
                ("password", models.CharField(max_length=64)),
            ],
        ),
    ]