<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 */
class User
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=16)
     */
    private $login;

    /**
     * @ORM\Column(type="string", length=16)
     */
    private $password;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isNotification;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $adresseMail;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Departement", inversedBy="users")
     */
    private $departement;

    public function __construct()
    {
        $this->departement = new ArrayCollection();
    }

    public function getId()
    {
        return $this->id;
    }

    public function getLogin(): ?string
    {
        return $this->login;
    }

    public function setLogin(string $login): self
    {
        $this->login = $login;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getIsNotification(): ?bool
    {
        return $this->isNotification;
    }

    public function setIsNotification(bool $isNotification): self
    {
        $this->isNotification = $isNotification;

        return $this;
    }

    public function getAdresseMail(): ?string
    {
        return $this->adresseMail;
    }

    public function setAdresseMail(string $adresseMail): self
    {
        $this->adresseMail = $adresseMail;

        return $this;
    }

    /**
     * @return Collection|Departement[]
     */
    public function getDepartement(): Collection
    {
        return $this->departement;
    }

    public function addDepartement(Departement $departement): self
    {
        if (!$this->departement->contains($departement)) {
            $this->departement[] = $departement;
        }

        return $this;
    }

    public function removeDepartement(Departement $departement): self
    {
        if ($this->departement->contains($departement)) {
            $this->departement->removeElement($departement);
        }

        return $this;
    }
}
